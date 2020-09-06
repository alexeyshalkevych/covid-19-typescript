import {
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_ERROR,
} from '../../constants/actionTypes';
import {
  ICountry,
  IActionGetCountries,
  IActionGetCountry,
  ICountriesError,
  IActionCountriesError,
} from '../../types';

export const getCountryRequest = (): IActionGetCountries => ({
  type: FETCH_COUNTRY_REQUEST,
});

export const getCountrySuccess = (country: ICountry): IActionGetCountry => ({
  type: FETCH_COUNTRY_SUCCESS,
  payload: country,
});

export const getCountryError = (
  error: ICountriesError,
): IActionCountriesError => ({
  type: FETCH_COUNTRY_ERROR,
  payload: {
    status: error.status,
    statusText: error.statusText,
  },
});
