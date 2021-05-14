import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../../store';
import Header from '../../../components/Sidebar/header';

const store = configureStore();

describe('Header component', () => {

    it('should display', () => {
        const {asFragment} = render(
            <Provider store={store}>
                <Header />
            </Provider>,
        );

        expect(asFragment()).toMatchSnapshot();
    })
});
