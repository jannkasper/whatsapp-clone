import Header from "./header";
import { connect } from "react-redux";
import { closeContactsNavigation } from "../../../actions";

const mapStateToProps = state => {
    return { };
}

const mapDispatchToProps = {
    closeContactsNavigation
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)