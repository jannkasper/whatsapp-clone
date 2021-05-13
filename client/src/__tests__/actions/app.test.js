import * as actions from "../../actions/app";

describe('App actions', () => {
    it('should create all actions', () => {
        const mockDispatch = jest.fn();

        const actionsResults = [
            [actions.receiveAuthentication('test'), 'USER_AUTHENTICATION'],
            [actions.openContactsNavigation('test'), 'OPEN_CONTACTS_NAVIGATION'],
            [actions.closeContactsNavigation('test'), 'CLOSE_CONTACTS_NAVIGATION'],
            [actions.setSelectedContact('test'), 'SET_SELECTED_CONTACT']
        ];

        actionsResults.forEach(([action,type]) => {
            action(mockDispatch);
            expect(mockDispatch).toHaveBeenLastCalledWith({
                type,
                payload: 'test',
            })
        })
    })
})
