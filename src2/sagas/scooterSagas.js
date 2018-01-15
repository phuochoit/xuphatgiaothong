/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Create some sagas for FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED
*/
import { SCOOTER_SELECCT, FETCH_SUCCEEDED, FETCH_FAILED, FETCH_SUCCEEDED_MORE, SCOOTER_SELECCT_MORE} from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchScooter() {
    try {
        const receivedScooter = yield Api.getScooterFromApi();
        yield put({ type: FETCH_SUCCEEDED, receivedScooter: receivedScooter});
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchScooter() {
    yield takeLatest(SCOOTER_SELECCT, fetchScooter);
}

// load more

function* fetchMoreScooter(action) {
    try {
        const receivedScooter = yield Api.getScooterLoadMoreFromApi(action.receivedScooter);
        yield put({ type: FETCH_SUCCEEDED_MORE, receivedScooter });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchMoreScooter() {
    yield takeLatest(SCOOTER_SELECCT_MORE, fetchMoreScooter);
}