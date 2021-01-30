import {
    fetchConversationsPending,
    fetchConversationsSuccess,
    fetchConversationsError,
    fetchContactsSuccess
} from "../actions"
import { publicFetch } from "../util/fetcher";

function fetchConversations(userExtId) {
    return dispatch => {
        dispatch(fetchConversationsPending());
        publicFetch.get(`messages/${userExtId}`)
            .then(res => {
                if(res.error) {
                    throw(res.error);
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