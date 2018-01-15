// react redux
import { connect } from "react-redux";

//impor component
import HomeComponent from "../../components/Home/HomeComponent";

// Action
import { fetchScooterAction, fetchSuccessAction, fetchFailedAction } from '../../actions/actionScooter';

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
}
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;