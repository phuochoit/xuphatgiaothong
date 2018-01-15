import { FETCH_FAILED, FETCH_SUCCEEDED, SCOOTER_SELECCT, FETCH_SUCCEEDED_MORE, SCOOTER_SELECCT_MORE} from "../actions/actionTypes";
// import { concat } from "lodash";

const scooterReducers = (scooter = [], action) => {
    console.log('action--', action);
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedScooter;
        case FETCH_FAILED:
            return [];
        case FETCH_SUCCEEDED_MORE:
        
            return 
                [...scooter,
                action.receivedScooter]
            
        default:
            return scooter; //state does not change
    }
}
export default scooterReducers;