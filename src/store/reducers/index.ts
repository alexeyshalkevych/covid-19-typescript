import { combineReducers } from 'redux';
import covidReducer from './covidReducer';
import covidErrorReducer from './covidErrors';

const rootReducer = combineReducers({
  countries: covidReducer,
  error: covidErrorReducer,
});

export default rootReducer;
