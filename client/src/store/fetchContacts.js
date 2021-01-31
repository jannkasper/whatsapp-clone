import { fetchContactsPending, fetchContactsSuccess, fetchContactsError } from "../actions";
import {publicFetch} from "../util/fetcher";

function fetchContacts() {
    return dispatch => {
        dispatch(fetchContactsPending());
        publicFetch.get("users")
            .then(res => {
                if(res.error) {
                    dispatch(fetchContactsError(res.error));
                }
                dispatch(fetchContactsSuccess({contacts: res.data }));
                return;

            })
            .catch(error => {
                dispatch(fetchContactsError(error));
            })
    }
}

export default fetchContacts