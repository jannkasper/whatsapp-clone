import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { receiveAuthentication } from "../../actions";
import fetchContacts from "../../store/fetchContacts";
import fetchConversations from "../../store/fetchConversations";

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = {
    receiveAuthentication,
    fetchContacts,
    fetchConversations
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)