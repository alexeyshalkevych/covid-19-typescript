import { all } from 'redux-saga/effects';
import getCountriesWatcher from './covidCountriesSaga';
import getCountryWatcher from './covidCountrySaga';

function* rootSaga(): Generator {
  yield all([getCountriesWatcher(), getCountryWatcher()]);
}

export default rootSaga;
