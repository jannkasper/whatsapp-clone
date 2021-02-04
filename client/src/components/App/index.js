import App from "./App";
import { connect } from "react-redux";
import { receiveMessage, receiveNewContact } from "../../actions";

const mapStateToProps = state => {
    const showPopup = !Boolean(state.user.externalIdentifier);
    const userExtId = state.user.externalIdentifier;
    const hasSelectedConversation = Boolean(state.conversation.selectedConversation);
    const isLoading = state.contacts.pending || state.conversation.pending;
    const completed = state.contacts.pending + state.conversation.pending / 2 * 100
    return {
        showPopup,
        hasSelectedConversation,
        userExtId,
        isLoading,
        completed,
    }
}

const mapDispatchToProps = {
    receiveMessage,
    receiveNewContact
}

export default connect(mapStateToProps, mapDispatchToProps)(App)