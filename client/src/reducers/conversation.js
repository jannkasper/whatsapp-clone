
const initialState = {
    pending: false,
    error: null,
    selectedConversation: null,
    conversationArray: [ ]
}

const conversation = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_CONVERSATION":
            let selectedConversation = state.conversationArray.find(conversation => conversation.contactExtId === action.payload.contactExtId);
            if (!selectedConversation) {
                // start new conversation
                selectedConversation = { contactExtId: action.payload.contactExtId, conversation: [] };
            }
            return {
                ...state,
                conversationArray: state.conversationArray.includes(selectedConversation) ? state.conversationArray : [...state.conversationArray, selectedConversation],
                selectedConversation: selectedConversation
            }
        case "CREATE_MESSAGE":
            const updateConversation = {
                ...state.selectedConversation,
                conversation: [...state.selectedConversation.conversation, action.payload.message]
            }
            return {
                ...state,
                conversationArray: [...state.conversationArray.map(element => element.contactExtId === updateConversation.contactExtId ? updateConversation : element)],
                selectedConversation: updateConversation
            }
        case "ENTER_SESSION_IDENTIFIER":
            const updateConvWithSessionExtId = {
                ...state.selectedConversation,
                sessionExtId: action.payload.sessionExtId
            }
            return {
                ...state,
                conversationArray: [...state.conversationArray.map(element => element.contactExtId === updateConvWithSessionExtId.contactExtId ? updateConvWithSessionExtId : element)],
                selectedConversation: updateConvWithSessionExtId
            }
        case "FETCH_CONVERSATIONS_PENDING":
            return {
                ...state,
                pending: true,
            }
        case "FETCH_CONVERSATIONS_SUCCESS":
            return {
                ...state,
                pending: false,
                conversationArray: action.payload.conversations,
            }
        case "FETCH_CONVERSATIONS_ERROR":
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            }
        default:
            return state
    }
}


export default conversation