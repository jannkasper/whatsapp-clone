
const initialState = {
    selectedConversation: null,
    conversationArray: [ ]
}

const conversation = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_CONVERSATION":
            let selectedConversation = state.conversationArray.find(conversation => conversation.contactExtId === action.payload.contactExtId);
            if (!selectedConversation) {
                selectedConversation = { contactExtId: action.payload.contactExtId, conversation: [] };
            }
            return {
                ...state,
                conversationArray: state.conversationArray.includes(selectedConversation) ? state.conversationArray : [...state.conversationArray, selectedConversation],
                selectedConversation: selectedConversation
            }
        case "SEND_MESSAGE":
            const newMessage = {
                type: action.payload.type,
                value: action.payload.value,
                status: action.payload.status,
                created: action.payload.created,
                userExtId: action.payload.userExtId,
            }
            const updateConversation = {
                ...state.selectedConversation,
                conversation: [...state.selectedConversation.conversation, newMessage]
            }
            return {
                ...state,
                conversationArray: [...state.conversationArray.map(element => element.contactExtId === updateConversation.contactExtId ? updateConversation : element)],
                selectedConversation: updateConversation
            }
        case "SET_CURRENT_SESSION_EXT_ID":
            const updateConvWithSessionExtId = {
                ...state.selectedConversation,
                sessionExtId: action.payload.sessionExtId
            }
            return {
                ...state,
                conversationArray: [...state.conversationArray.map(element => element.contactExtId === updateConvWithSessionExtId.contactExtId ? updateConvWithSessionExtId : element)],
                selectedConversation: updateConvWithSessionExtId
            }
            return
        default:
            return state
    }
}


export default conversation