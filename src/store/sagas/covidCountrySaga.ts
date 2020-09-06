import { call, put } from 'redux-saga/effects';
import * as Eff from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  getCountryRequest,
  getCountrySuccess,
  getCountryError,
} from '../actions/covidCountyActions';
import { fetchCountry } from '../../services/covidService';
import { FETCH_COUNTRY } from '../../constants/actionTypes';

const { takeLatest }: any = Eff;

interface ICountryCode {
  value: string;
}

function* getCountryWorker({ value }: ICountryCode) {
  yield put(getCountryRequest());

  try {
    const country = yield call(fetchCountry, value);

    yield put(getCountrySuccess(country));
  } catch (error) {
    yield put(getCountryError(error.response));
  }
}

function* getCountryWatcher(): SagaIterator<void> {
  yield takeLatest(FETCH_COUNTRY, getCountryWorker);
}

export default getCountryWatcher;
