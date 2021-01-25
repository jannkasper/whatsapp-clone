
export const receiveAuthentication = payload => async dispatch => {
    dispatch({ type: "USER_AUTHENTICATION", payload });
};