import Header from "./header";
import { connect } from "react-redux";
import { openContactsNavigation } from "../../../actions";

const mapStateToProps = state => {
    return { avatar: state.user?.avatar };
}

const mapDispatchToProps = {
    openContactsNavigation
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)