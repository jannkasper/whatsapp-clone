import reducer from "../../reducers/user";

describe('User reducer', () => {
    it('should handle initial state', () => {
        const initialState = {
            externalIdentifier: "",
            username: "",
            phoneNumber : "",
            created: "",
            profileImage : undefined,
        }
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle USER_AUTHENTICATION', () => {
        const userInfo = {
            externalIdentifier: "externalIdentifierTest",
            username: "usernameTest",
            phoneNumber : "phoneNumberTest",
            created: "createdTest",
            profileImage : {type: 'jpeg', data: 'test'},
        }
        expect(reducer({}, { type:'USER_AUTHENTICATION', payload: {userInfo} }))
            .toEqual(userInfo)
    })
})

