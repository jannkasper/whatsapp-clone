import React from "react";
import Footer from "./Footer";
import { connect } from "react-redux";
import { sendMessage } from "../../../actions";

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    sendMessage
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer)
