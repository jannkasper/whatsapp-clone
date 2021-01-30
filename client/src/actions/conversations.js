import {publicFetch} from "../util/fetcher";

export const sendMessage = payload => async (dispatch, getState) => {
    const state = getState();

    const saveMessage = {
        type: payload.type,
        value: payload.value,
        status: 0,
        userExtId: state.user.externalIdentifier,
        created: Date.now()
    };
    dispatch({ type: "SEND_MESSAGE", payload: saveMessage });
    const messageData = {
        type: payload.type,
        value: payload.value,
        sessionExtId: state.conversation.selectedConversation.sessionExtId,
        userExtId: state.user.externalIdentifier,
        receiverExtId: state.conversation.selectedConversation.contactExtId,
        createdDate: Date.now()
    };
    const { data } = await publicFetch.post("message", messageData);

    if (!state.conversation.selectedConversation.sessionExtId) {
        dispatch({ type: "SET_CURRENT_SESSION_EXT_ID", payload: {sessionExtId: data.sessionExtId }});
    }

}

export const fetchConversationsPending = () => ({ type: "FETCH_CONVERSATIONS_PENDING" });


export const fetchConversationsSuccess = payload => async dispatch => {
    dispatch({ type: "FETCH_CONVERSATIONS_SUCCESS", payload });
};

export const fetchConversationsError = payload => async dispatch => {
    dispatch({ type: "FETCH_CONVERSATIONS_ERROR", payload });
};