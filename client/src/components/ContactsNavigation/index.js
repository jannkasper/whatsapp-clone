import ContactsNavigation from "./ContactsNavigation";
import { connect } from "react-redux";
import { receiveAuthentication } from "../../actions";

const mapStateToProps = state => {
    return { openContactsNavigation: state.app.openContactsNavigation };
}

const mapDispatchToProps = {
    receiveAuthentication
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsNavigation)