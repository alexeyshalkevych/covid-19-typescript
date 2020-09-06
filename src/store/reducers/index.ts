import { combineReducers } from 'redux';
import covidCountriesReducer from './covidCountriesReducer';
import covidErrorReducer from './covidErrors';
import covidCountryReducer from './covidCountryReducer';

const rootReducer = combineReducers({
  countries: covidCountriesReducer,
  country: covidCountryReducer,
  error: covidErrorReducer,
});

export default rootReducer;
