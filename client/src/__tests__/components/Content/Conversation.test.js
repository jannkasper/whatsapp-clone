import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../../store';
import Conversation from '../../../components/Content/conversation';

const initState = {
    conversation: {
        selectedConversation: null
    }
};
const store = configureStore(initState);

describe('Conversation component', () => {

    it('should display', () => {
        const {asFragment} = render(
            <Provider store={store}>
                <Conversation />
            </Provider>,
        );

        expect(asFragment()).toMatchSnapshot();
    })
});
