import reducer from "../../reducers/conversation";

describe('Conversation reducer', () => {
    const defaultState = {
        pending: false,
        error: null,
        selectedConversation: null,
        conversationArray: [ ]
    };
    it('should handle initial state', () => {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });

    it('should handle SELECT_CONVERSATION', () => {
        const payload = { contactExtId: '2' };
        const recentState = {
            ...defaultState,
            conversationArray: [
                {contactExtId: '1', conversation: []},
                {contactExtId: '2', conversation: []}
                ]
        };
        const resultState = {
            ...defaultState,
            selectedConversation: {contactExtId: '2', conversation: []},
            conversationArray: [
                {contactExtId: '1', conversation: []},
                {contactExtId: '2', conversation: []}
            ]
        };

        expect(reducer(recentState, { type:'SELECT_CONVERSATION', payload }))
            .toEqual(resultState)
    });

    it('should handle CREATE_MESSAGE', () => {
        const payload = { message: {text: 'test'} };
        const recentState = {
            ...defaultState,
            selectedConversation: {contactExtId: '2', conversation: []},
            conversationArray: [
                {contactExtId: '1', conversation: []},
                {contactExtId: '2', conversation: []}
            ]
        };
        const resultState = {
            ...defaultState,
            selectedConversation: {contactExtId: '2', conversation: [payload.message]},
            conversationArray: [
                {contactExtId: '1', conversation: []},
                {contactExtId: '2', conversation: [payload.message]}
            ]
        };

        expect(reducer(recentState, { type:'CREATE_MESSAGE', payload }))
            .toEqual(resultState)
    });

    it('should handle RECEIVE_MESSAGE', () => {
        const payload = { message: {userExtId: '2', text: 'test'} };
        const recentState = {
            ...defaultState,
            selectedConversation: {contactExtId: '2', conversation: []},
            conversationArray: [
                {contactExtId: '1', conversation: []},
                {contactExtId: '2', conversation: []}
            ]
        };
        const resultState = {
            ...defaultState,
            selectedConversation: {contactExtId: '2', conversation: [payload.message]},
            conversationArray: [
                {contactExtId: '1', conversation: []},
                {contactExtId: '2', conversation: [payload.message]}
            ]
        };

        expect(reducer(recentState, { type:'RECEIVE_MESSAGE', payload }))
            .toEqual(resultState)
    });

    it('should handle ENTER_SESSION_IDENTIFIER', () => {
        const payload = { sessionExtId: '1' };
        const recentState = {
            ...defaultState,
            selectedConversation: {contactExtId: '1', conversation: []}
        };
        const resultState = {
            ...defaultState,
            selectedConversation: {contactExtId: '1', sessionExtId: '1', conversation: []}
        };

        expect(reducer(recentState, { type:'ENTER_SESSION_IDENTIFIER', payload }))
            .toEqual(resultState)
    })

    it('should handle FETCH_CONVERSATIONS_PENDING', () => {
        const resultState = {
            ...defaultState,
            pending: true
        };
        expect(reducer(undefined, { type:'FETCH_CONVERSATIONS_PENDING' }))
            .toEqual(resultState)
    });

    it('should handle FETCH_CONVERSATIONS_SUCCESS', () => {
        const payload = { conversations: [{contactExtId: '1', conversation: []}] };
        const resultState = {
            ...defaultState,
            conversationArray: payload.conversations
        };
        expect(reducer(undefined, { type:'FETCH_CONVERSATIONS_SUCCESS', payload }))
            .toEqual(resultState)
    });

    it('should handle FETCH_CONVERSATIONS_ERROR', () => {
        const payload = { error: 'errorTest' };
        const resultState = {
            ...defaultState,
            error: payload.error,
        };
        expect(reducer(undefined, { type:'FETCH_CONVERSATIONS_ERROR', payload }))
            .toEqual(resultState)
    });
})

