import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  getCountriesRequest,
  getCountriesSuccess,
  getCountriesError,
} from '../actions/covidActions';
import { fetchCountries } from '../../services/covidService';
import { FETCH_COUNTRIES } from '../../constants/actionTypes';
import { getCountriesNameAndValue } from '../../helpers/getCountriesNameAndValue';

function* getCountriesWorker() {
  yield put(getCountriesRequest());

  try {
    const countries = yield call(fetchCountries);

    yield put(getCountriesSuccess(getCountriesNameAndValue(countries)));
  } catch (error) {
    yield put(getCountriesError(error.response));
  }
}

function* getCountriesWatcher() {
  yield takeLatest(FETCH_COUNTRIES, getCountriesWorker);
}

function* rootSaga(): Generator {
  yield all([getCountriesWatcher()]);
}

export default rootSaga;
