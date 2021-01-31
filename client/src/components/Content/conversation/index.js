import Conversation from "./Conversation";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        currentConversation: state.conversation.selectedConversation,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Conversation)