
const initialState = {
    openContactsNavigation: false,
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_CONTACTS_NAVIGATION":
            return {
                ...state,
                openContactsNavigation: true
            }
        case "CLOSE_CONTACTS_NAVIGATION":
            return {
                ...state,
                openContactsNavigation: false
            }
        default:
            return state;
    }
}

export default app