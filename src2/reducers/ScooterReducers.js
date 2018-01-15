import { FETCH_FAILED,FETCH_SUCCEEDED,SCOOTER_SELECCT } from "../actions/actionTypes";


const scooterReducers = (scooter = [], action) => {
    console.log('action--', action);
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedScooter;
        case FETCH_FAILED:
            return [];
        
        default:
            return scooter; //state does not change
    }
}
export default scooterReducers;