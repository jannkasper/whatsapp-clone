

const initialState = {
    selectedConversation: null,
    conversationArray: [
        // {
        //     contactName: "E",
        //     conversation: [
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "E"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "E"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "E"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "E"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "E"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "E"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "E"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet", date: Date.now(), author: "E"},
        //         {text: "Lorem ipsum dolor sit amet", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "E"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //     ]
        // },
        // {
        //     contactName: "Q",
        //     conversation: [
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Q"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //         {text: "Lorem ipsum dolor sit amet", date: Date.now(), author: "Q"},
        //         {text: "Lorem ipsum dolor sit amet", date: Date.now(), author: "Me"},
        //     ]
        // },
        // {
        //     contactName: "R",
        //     conversation: [
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "R"},
        //         {text: "Lorem ipsum dolor sit amet", date: Date.now(), author: "R"},
        //         {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), author: "Me"},
        //     ]
        // },
        // {
        //     contactName: "T",
        //     conversation: [
        //         {text: "Hey bro, how are you doing? :)", date: Date.now(), author: "T"},
        //
        //     ]
        // }
    ]
}


const conversation = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_CONVERSATION":
            let selectedConversation = state.conversationArray.find(conversation => conversation.contactName === action.payload.contact.name);
            if (!selectedConversation) {
                selectedConversation = { contactName: action.payload.contact.name, conversation: [] };
            }
            return {
                ...state,
                conversationArray: state.conversationArray.includes(selectedConversation) ? state.conversationArray : [...state.conversationArray, selectedConversation],
                selectedConversation: selectedConversation
            }
        case "SEND_MESSAGE":
            const newMessage = {text: action.payload.text, date: Date.now(), author: "Me"}
            const updateConversation = {
                ...state.selectedConversation,
                conversation: [...state.selectedConversation.conversation, newMessage]
            }
            return {
                ...state,
                conversationArray: [...state.conversationArray.map(element => element.contactName === updateConversation.contactName ? updateConversation : element)],
                selectedConversation: updateConversation
            }
        default:
            return state
    }
}


export default conversation