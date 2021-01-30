
const initialState = {
    pending: false,
    error: null,
    selectedContact: null,
    contactArray: []
}

const contacts = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SELECTED_CONTACT":
            return {
                ...state,
                selectedContact: state.contactArray.find(element => element.externalIdentifier == action.payload.contactExtId)
            }
        case "FETCH_CONTACTS_PENDING":
            return {
                ...state,
                pending: true,
            }
        case "FETCH_CONTACTS_SUCCESS":
            return {
                ...state,
                pending: false,
                contactArray: action.payload.contacts,
            }
        case "FETCH_CONTACTS_ERROR":
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            }
        default:
            return state;
    }
}

export default contacts