
const initialState = {
    selectedContact: null,
    contactArray: [
        { name: "Q", status: "Hey there! I am using WhatsApp first!" },
        { name: "W", status: "Hey there! WhatsApp here" },
        { name: "E", status: "Hey there! I am using WhatsApp" },
        { name: "R", status: "Hey there! I am using WhatsApp" },
        { name: "T", status: "Hey there! I am using WhatsApp" },
        { name: "Y", status: "Hey there! I am using WhatsApp" },
        { name: "I", status: "Hey there! I am using WhatsApp" },
        { name: "A", status: "Hey there! I am using WhatsApp" },
        { name: "F", status: "Hey there! I am using WhatsApp" },
        { name: "G", status: "Hey there! I am using WhatsApp" },
        { name: "L", status: "Hey there! I am using WhatsApp" },
        { name: "H", status: "Hey there! I am using WhatsApp" },
        { name: "J", status: "Hey there! I am using WhatsApp" },
        { name: "K", status: "Hey there! I am using WhatsApp" },
        { name: "B", status: "Hey there! I am using WhatsApp" },
        { name: "X", status: "Hey there! I am using WhatsApp" },
        { name: "C", status: "Hey there! I am using WhatsApp" },
    ]
}

const contacts = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SELECTED_CONTACT":
            return {
                ...state,
                selectedContact: action.payload.contact
            }
        default:
            return state;
    }
}

export default contacts