import { combineReducers } from "redux";

import NavigatorsReducer from "./NavigatorsReducer";
import scooterReducers from "./ScooterReducers";

const AllReducer = combineReducers({
    nav: NavigatorsReducer,
    scooter:scooterReducers
});

export default AllReducer;