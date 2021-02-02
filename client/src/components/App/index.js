import App from "./App";
import { connect } from "react-redux";
import { receiveMessage } from "../../actions";

const mapStateToProps = state => {
    const showPopup = !Boolean(state.user.externalIdentifier);
    const userExtId = state.user.externalIdentifier;
    const hasSelectedConversation = Boolean(state.conversation.selectedConversation);
    return {
        showPopup,
        hasSelectedConversation,
        userExtId
    }
}

const mapDispatchToProps = {
    receiveMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(App)