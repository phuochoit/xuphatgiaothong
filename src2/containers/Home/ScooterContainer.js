// react redux
import { connect } from "react-redux";

//impor component
import ScooterComponent from "../../components/Home/ScooterComponent";

// Action
import { fetchScooterAction, fetchScooterMoreAction } from '../../actions/actionScooter';

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
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
        onFetchMoreScooter: (items) => {
            dispatch(fetchScooterMoreAction(items));
        }
    };
}
const ScooterContainer = connect(mapStateToProps, mapDispatchToProps)(ScooterComponent);
export default ScooterContainer;