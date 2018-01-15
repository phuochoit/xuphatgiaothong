import { SCOOTER_SELECCT, FETCH_SUCCEEDED, FETCH_FAILED, FETCH_SUCCEEDED_MORE, SCOOTER_SELECCT_MORE} from './actionTypes';


export const fetchScooterAction = (receivedScooter) => {
    return {
        type: SCOOTER_SELECCT,
        receivedScooter
    }
}

export const fetchScooterMoreAction = (receivedScooter) => {
    return {
        type: SCOOTER_SELECCT_MORE,
        receivedScooter
    }
}


//Action sent by Redux-saga
export const fetchSuccessMoreAction = (receivedScooter) => {
    return {
        type: FETCH_SUCCEEDED_MORE,
        receivedScooter
    }
}

export const fetchSuccessAction = (receivedScooter) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedScooter
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}