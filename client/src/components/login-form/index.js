import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { receiveAuthentication } from "../../actions";
import fetchContacts from "../../store/fetchContacts";


const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = {
    receiveAuthentication,
    fetchContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)