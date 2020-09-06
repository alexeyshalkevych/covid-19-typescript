import { combineReducers } from 'redux';
import covidCountriesReducer from './covidCountriesReducer';
import covidErrorReducer from './covidErrors';
import covidCountryReducer from './covidCountryReducer';
import covidHistoryReducer from './covidHistoryReducer';

const rootReducer = combineReducers({
  countries: covidCountriesReducer,
  country: covidCountryReducer,
  error: covidErrorReducer,
  history: covidHistoryReducer,
});

export default rootReducer;
