import Sidebar from "./Sidebar";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        selectedContact: state.contacts.selectedContact,
    };
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)