import { combineReducers } from 'redux';
import covidCountriesReducer from './covidCountriesReducer';
import covidErrorReducer from './covidErrors';
import covidCountryReducer from './covidCountryReducer';
import covidHistoryReducer from './covidHistoryReducer';
import {
  CountriesState,
  CountryState,
  ErrorState,
  CovidHistoryState,
} from '../../@types/types';

interface IRootReducer {
  countries: CountriesState;
  country: CountryState;
  error: ErrorState;
  history: CovidHistoryState;
}

const rootReducer = combineReducers<IRootReducer>({
  countries: covidCountriesReducer,
  country: covidCountryReducer,
  error: covidErrorReducer,
  history: covidHistoryReducer,
});

export default rootReducer;
