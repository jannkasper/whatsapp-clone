import App from "./App";
import { connect } from "react-redux";
// import {} from "../../actions";

const mapStateToProps = state => {
    // const showPopup = !Boolean(state.user.id);
    const showPopup = false;
    return {
        showPopup
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)