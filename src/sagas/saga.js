import { take, takeEvery, put, call } from 'redux-saga/effects';
import { fetchData } from '../api/api';

export function* increaseByFive() {
    yield put({type: 'SAGA_INCREASE_BY_FIVE'});
}

export function* watchIncreaseByFive() {
    yield takeEvery("INCREMENT_BY_FIVE", increaseByFive);
}

export function* launchAPI() {
    try {
        while (true) {
            yield take("LAUNCH_API");
            const response = yield call(fetchData, false);
            if (response) {
                yield put({
                    type: "API_FETCH_SUCCESS",
                    payload: response,
                });
            } else {
                yield put({
                    type: "API_FETCH_FAILURE"
                });
            }
        }
    } catch (e) {
        yield put({ type: "API_FETCH_FAILURE" });
    }
}