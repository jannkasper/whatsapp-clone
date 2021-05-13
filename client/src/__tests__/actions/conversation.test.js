import * as actions from "../../actions/conversations";
import * as message from "../../util/message";
import * as socket from "../../util/socket";

describe('Conversations actions', () => {
    it ('should create all actions', () => {
        const mockDispatch = jest.fn();

        const actionsResults = [
            [actions.fetchConversationsSuccess('test'), 'FETCH_CONVERSATIONS_SUCCESS'],
            [actions.fetchConversationsError('test'), 'FETCH_CONVERSATIONS_ERROR'],
            [actions.selectConversation('test'), 'SELECT_CONVERSATION'],
            [actions.receiveMessage('test'), 'RECEIVE_MESSAGE'],

        ];

        expect(actions.fetchConversationsPending()).toEqual({ type: "FETCH_CONVERSATIONS_PENDING" })
        actionsResults.forEach(([action, type]) => {
            action(mockDispatch);
            expect(mockDispatch).toHaveBeenLastCalledWith({
                type,
                payload: 'test',
            });
        });
    });

    it('should create an action to create message', async () => {
        const mockDispatch = jest.fn();
        const mockEmit = jest.fn();
        jest.spyOn(socket, "getSocket").mockImplementation( () => ({ emit: mockEmit }));
        jest.spyOn(message, "prepare").mockImplementation(() => ({toSend: 'toSendTest', original: 'originalTest'}));

        await actions.createMessage({ payload: 'test' })(mockDispatch, jest.fn().mockReturnValue({ state: {} }));

        expect(message.prepare).toHaveBeenLastCalledWith({ payload: 'test' }, { state: {} });
        expect(mockDispatch).toHaveBeenLastCalledWith({ type: 'CREATE_MESSAGE', payload: { message: 'originalTest' } });
        expect(socket.getSocket().emit).toHaveBeenLastCalledWith('MESSAGE', 'toSendTest');
    })
})
