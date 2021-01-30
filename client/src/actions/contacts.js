export const fetchContactsPending = () => ({ type: "FETCH_CONTACTS_PENDING" });


export const fetchContactsSuccess = payload => async dispatch => {
    dispatch({ type: "FETCH_CONTACTS_SUCCESS", payload });
};

export const fetchContactsError = payload => async dispatch => {
    dispatch({ type: "FETCH_CONTACTS_ERROR", payload });
};