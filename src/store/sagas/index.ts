import { all } from 'redux-saga/effects';
import getCountriesWatcher from './covidCountriesSaga';
import getCountryWatcher from './covidCountrySaga';
import getCovidHistoryWatcher from './covidHistorySaga';

function* rootSaga(): Generator {
  yield all([
    getCountriesWatcher(),
    getCountryWatcher(),
    getCovidHistoryWatcher(),
  ]);
}

export default rootSaga;
