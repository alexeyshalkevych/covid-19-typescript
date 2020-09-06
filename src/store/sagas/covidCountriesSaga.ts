import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  getCountriesRequest,
  getCountriesSuccess,
  getCountriesError,
} from '../actions/covidCountriesActions';
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

function* getCountriesWatcher(): SagaIterator<void> {
  yield takeLatest(FETCH_COUNTRIES, getCountriesWorker);
}

export default getCountriesWatcher;
