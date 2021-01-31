import { fetchConversationsPending, fetchConversationsSuccess, fetchConversationsError } from "../actions"
import { publicFetch } from "../util/fetcher";

function fetchConversations(userExtId) {
    return dispatch => {
        dispatch(fetchConversationsPending());
        publicFetch.get(`messages/${userExtId}`)
            .then(res => {
                if(res.error) {
                    dispatch(fetchConversationsError(res.error));
                }
                dispatch(fetchConversationsSuccess({conversations: res.data }));
                return;
            })
            .catch(error => {
                dispatch(fetchConversationsError(error));
            })
    }
}

export default fetchConversations