import App from "./App";
import { connect } from "react-redux";
// import {} from "../../actions";

const mapStateToProps = state => {
    // const user = state.user;
    const showPopup = !Boolean(state.user.id);
    return {
        showPopup
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)