import App from "./App";
import { connect } from "react-redux";
// import {} from "../../actions";

const mapStateToProps = state => {
    const showPopup = !Boolean(state.user.id);
    // const showPopup = false;
    const hasSelectedConversation = Boolean(state.conversation.selectedConversation);
    return {
        showPopup,
        hasSelectedConversation
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)