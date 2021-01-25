import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { receiveAuthentication } from "../../actions";

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = {
    receiveAuthentication
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)