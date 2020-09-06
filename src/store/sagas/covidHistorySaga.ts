import { put, call, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  getCovidHistoryRequest,
  getCovidHistorySuccess,
  getCovidHistoryError,
} from '../actions/covidHistoryActions';
import { fetchCovidHistoryByLastThreeMonth } from '../../services/covidService';
import { FETCH_COVID_HISTORY } from '../../constants/actionTypes';

function* getCovidHistoryWorker() {
  yield put(getCovidHistoryRequest());

  try {
    const covidHistory = yield call(fetchCovidHistoryByLastThreeMonth);

    yield put(getCovidHistorySuccess(covidHistory));
  } catch (error) {
    yield put(getCovidHistoryError(error.response));
  }
}

function* getCovidHistoryWatcher(): SagaIterator<void> {
  yield takeLatest(FETCH_COVID_HISTORY, getCovidHistoryWorker);
}

export default getCovidHistoryWatcher;
