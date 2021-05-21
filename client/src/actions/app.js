export const receiveAuthentication = payload => async dispatch => {
    dispatch({ type: "USER_AUTHENTICATION", payload });
};

export const openContactsNavigation = () => async dispatch => {
    dispatch({ type: "OPEN_CONTACTS_NAVIGATION" });
};

export const closeContactsNavigation = () => async dispatch => {
    dispatch({ type: "CLOSE_CONTACTS_NAVIGATION" });
};

export const setSelectedContact = payload => async dispatch => {
    dispatch({ type: "SET_SELECTED_CONTACT", payload });
};
