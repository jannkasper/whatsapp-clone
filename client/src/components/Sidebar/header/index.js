import Header from "./header";
import { connect } from "react-redux";
// import {} from "../../actions";

const mapStateToProps = state => {
    return { avatar: state.user?.avatar };
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)