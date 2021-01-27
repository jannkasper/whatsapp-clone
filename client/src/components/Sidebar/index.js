import Sidebar from "./Sidebar";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { openContactsNavigation: state.app.openContactsNavigation };
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)