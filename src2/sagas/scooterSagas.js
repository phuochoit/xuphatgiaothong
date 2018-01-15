/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Create some sagas for FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED
*/
import { SCOOTER_SELECCT, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchMovies() {
    try {
        const receivedScooter = yield Api.getScooterFromApi();
        yield put({ type: FETCH_SUCCEEDED, receivedScooter: receivedScooter });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchMovies() {
    yield takeLatest(SCOOTER_SELECCT, fetchMovies);
}