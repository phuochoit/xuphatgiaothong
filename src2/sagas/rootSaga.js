import { call, all } from 'redux-saga/effects';
import { watchFetchMovies } from './scooterSagas';

export default function* rootSaga() {
    yield call(watchFetchMovies);
}