import { SCOOTER_SELECCT, FETCH_SUCCEEDED, FETCH_FAILED } from './actionTypes';

export const fetchScooterAction = (receivedScooter) => {
    return {
        type: SCOOTER_SELECCT,
        receivedScooter
    }
}


//Action sent by Redux-saga
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