
const initialState = {
    externalIdentifier: "",
    username: "",
    phoneNumber : "",
    created: "",
    profileImage : undefined,
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case "USER_AUTHENTICATION":
        return {
            ...action.payload.userInfo
        }
        default:
            return state;
    }
}

export default user