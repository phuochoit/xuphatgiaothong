// react redux
import { connect } from "react-redux";

//impor component
import HomeComponent from "../../components/Home/HomeComponent";

// Action
import { fetchScooterAction, fetchSuccessAction, fetchFailedAction } from '../../actions/actionScooter';

const mapStateToProps = (state) => {
    return {
        nav: state.nav,
        scooter: state.scooter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchScooter: () => {
            dispatch(fetchScooterAction());
        },
    };
}
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;