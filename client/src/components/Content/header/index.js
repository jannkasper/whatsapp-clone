import React from "react";
import Header from "./Header";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        currentContact: state.contacts.selectedContact
    }
}

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
