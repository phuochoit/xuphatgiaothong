import AppNavigators from "../navigators/AppNavigators";
import { HOME } from "../values/screenName";
const initialState = AppNavigators.router.getStateForAction(AppNavigators.router.getActionForPathAndParams(HOME));

const NavigatorsReducer = (state = initialState, action) => {
    const nextState = AppNavigators.router.getStateForAction(action, state);

    return nextState || state;
};
export default NavigatorsReducer;