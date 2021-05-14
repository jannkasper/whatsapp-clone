import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar  from '../../../components/Sidebar/search/index';

describe('SearchBar component', () => {
    it('should display', () => {
        const {asFragment} = render(
                <SearchBar />,
        );

        expect(asFragment()).toMatchSnapshot();
    })

    it('can enter input', async () => {
        const setSearchText = jest.fn();
        const searchText = 'SearchTextTest';
        const placeHolder = 'PlaceHolderTest';

        render(
            <SearchBar searchText={searchText} placeHolder={placeHolder} setSearchText={setSearchText} />,
        );

        const input = screen.getByPlaceholderText(placeHolder);

        // Validate
        fireEvent.keyDown(input, {key: 'Enter'});

        await waitFor(() =>  {
            expect(setSearchText).not.toHaveBeenCalled();
        });

        // Type test
        fireEvent.change(input, { target: { value: 'TEST' } })

        // Validate
        fireEvent.keyDown(input, {key: 'Enter'});

        await waitFor(() =>  {
            expect(setSearchText).toHaveBeenLastCalledWith('TEST');
        });
    });
});
