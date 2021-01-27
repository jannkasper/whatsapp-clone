
export const receiveAuthentication = payload => async dispatch => {
    dispatch({ type: "USER_AUTHENTICATION", payload });
};

export const openContactsNavigation = payload => async dispatch => {
    dispatch({ type: "OPEN_CONTACTS_NAVIGATION", payload });
};

export const closeContactsNavigation = payload => async dispatch => {
    dispatch({ type: "CLOSE_CONTACTS_NAVIGATION", payload });
};