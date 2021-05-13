import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../../store';
import Header from '../../../components/Content/header/index';

const initState = {
    contacts: {
        selectedContact: {
            username: 'tester'
        }
    }
};
const store = configureStore(initState);

describe('Header component', () => {

    it('should display', () => {
        const {asFragment} = render(
            <Provider store={store}>
                <Header/>
            </Provider>,
        );

        expect(screen.getByText(initState.contacts.selectedContact.username)).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    })
});
