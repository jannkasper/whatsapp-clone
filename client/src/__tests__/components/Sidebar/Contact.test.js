import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { format } from 'date-fns';
import configureStore from '../../../store';
import Contact  from '../../../components/Sidebar/contact/index';
import * as actions from '../../../actions';

const store = configureStore();

const params = {
    externalIdentifier: '1',
    name: 'nameTest',
    status: 'statusTest',
    lastMessage: {
        type: 'typeTest',
        value: 'valueTest',
        created: new Date(2020,10,10)
    },
    isSelected: false
}

jest.mock('../../../actions');

describe('Contact component', () => {
    it('should display', () => {
        const {asFragment} = render(
            <Provider store={store}>
                <Contact {...params} />
            </Provider>,
        );

        expect(asFragment()).toMatchSnapshot();
    })

    it('can select contact', async () => {
        const setSelectedContactMock = jest.fn((contactExtId) => ({ type: '', contactExtId: contactExtId }));
        const selectConversationMock = jest.fn((contactExtId) => ({ type: '', contactExtId: contactExtId }));
        const closeContactsNavigationMock = jest.fn(() => ({type: ''}));

        jest.spyOn(actions, "setSelectedContact").mockImplementation(setSelectedContactMock);
        jest.spyOn(actions, "selectConversation").mockImplementation(selectConversationMock);
        jest.spyOn(actions, "closeContactsNavigation").mockImplementation(closeContactsNavigationMock);

        render(
            <Provider store={store}>
                <Contact {...params} />
            </Provider>,
        );

        const div = screen.getByRole('selectContact');

        // Validate
        fireEvent.click(div);

        await waitFor(() =>  {
            expect(setSelectedContactMock).toHaveBeenLastCalledWith({ contactExtId: '1' });
            expect(selectConversationMock).toHaveBeenLastCalledWith({ contactExtId: '1' });
            expect(closeContactsNavigationMock).toHaveBeenCalled();
        });
    });

    it('can determine date', async () => {
        render(
            <Provider store={store}>
                <Contact {...params} />
            </Provider>,
        );

        expect(screen.getByText(format(params.lastMessage.created, "dd/MM/yyyy"))).toBeDefined();

        // Update created date
        params.lastMessage.created.setDate(params.lastMessage.created.getDate() - 1);

        render(
            <Provider store={store}>
                <Contact {...params}/>
            </Provider>,
        );

        expect(screen.getByText(format(params.lastMessage.created, "dd/MM/yyyy"))).toBeDefined();
    });
});
