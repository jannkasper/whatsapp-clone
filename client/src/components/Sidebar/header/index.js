import Header from "./header";
import { connect } from "react-redux";
import { openContactsNavigation } from "../../../actions";

const mapStateToProps = state => {
    return { profileImage: state.user?.profileImage };
}

const mapDispatchToProps = {
    openContactsNavigation
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)