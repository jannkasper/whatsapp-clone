import Footer from "./Footer";
import { connect } from "react-redux";
import { createMessage } from "../../../actions";

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    createMessage
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer)
