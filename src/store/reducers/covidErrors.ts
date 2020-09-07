import {
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_ERROR,
} from '../../constants/actionTypes';
import { ErrorState, IActionCountriesError } from '../../@types/types';

const initialState: ErrorState = null as any;

const covidErrorReducer = (
  state = initialState,
  { type, payload }: IActionCountriesError,
): ErrorState => {
  switch (type) {
    case FETCH_COUNTRIES_REQUEST:
    case FETCH_COUNTRIES_SUCCESS:
    case FETCH_COUNTRY_REQUEST:
    case FETCH_COUNTRY_SUCCESS:
      return state;
    case FETCH_COUNTRIES_ERROR:
    case FETCH_COUNTRY_ERROR:
      return payload;

    default:
      return state;
  }
};

export default covidErrorReducer;
