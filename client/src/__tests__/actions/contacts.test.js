import * as actions from "../../actions/contacts";

describe('Contacts actions', () => {
    it('should create all actions', () => {
        const mockDispatch = jest.fn();

        const actionsResults = [
            [actions.fetchContactsSuccess('test'), 'FETCH_CONTACTS_SUCCESS'],
            [actions.fetchContactsError('test'), 'FETCH_CONTACTS_ERROR'],
            [actions.receiveNewContact('test'), 'RECEIVE_CONTACT'],
        ];

        expect(actions.fetchContactsPending()).toEqual({ type: "FETCH_CONTACTS_PENDING" })
        actionsResults.forEach(([action,type]) => {
            action(mockDispatch);
            expect(mockDispatch).toHaveBeenLastCalledWith({
                type,
                payload: 'test',
            })
        });
    })
})
