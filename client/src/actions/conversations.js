import { publicFetch } from "../util/fetcher";
import { prepare as prepareMessage } from "../util/message"

export const fetchConversationsPending = () => ({ type: "FETCH_CONVERSATIONS_PENDING" });

export const fetchConversationsSuccess = payload => async dispatch => {
    dispatch({ type: "FETCH_CONVERSATIONS_SUCCESS", payload });
};

export const fetchConversationsError = payload => async dispatch => {
    dispatch({ type: "FETCH_CONVERSATIONS_ERROR", payload });
};

export const selectConversation = payload => async dispatch => {
    dispatch({ type: "SELECT_CONVERSATION", payload });
};

export const createMessage = payload => async (dispatch, getState) => {
    const state = getState();
    const message = await prepareMessage(payload, state);

    dispatch({ type: "CREATE_MESSAGE", payload: { message: message.original }});

    publicFetch.post("message", message.toSend)
        .then(response => {
            if (!state.conversation.selectedConversation.sessionExtId) {
                dispatch({ type: "ENTER_SESSION_IDENTIFIER", payload: {sessionExtId: response.data.sessionExtId }});
            }
        });
}