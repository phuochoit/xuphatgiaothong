import { fork  } from 'redux-saga/effects';
import { watchFetchScooter, watchFetchMoreScooter } from './scooterSagas';

export default function* rootSaga() {
    yield [
        fork(watchFetchScooter),
        fork(watchFetchMoreScooter),
    ];
}