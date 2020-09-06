import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
} from '../../constants/actionTypes';
import {
  ICountry,
  IActionGetCountries,
  ICountriesError,
  IActionCountriesError,
} from '../../types';

export const getCountriesRequest = (): IActionGetCountries => ({
  type: FETCH_COUNTRIES_REQUEST,
});

export const getCountriesSuccess = (
  countries: ICountry[],
): IActionGetCountries => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const getCountriesError = (
  error: ICountriesError,
): IActionCountriesError => ({
  type: FETCH_COUNTRIES_ERROR,
  payload: {
    status: error.status,
    statusText: error.statusText,
  },
});
