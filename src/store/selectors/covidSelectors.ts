import {
  ICountriesError,
  ICountry,
  ICovidHistory,
  IStateCountries,
  IStateCountry,
  IStateError,
  IStateCovidHistory,
} from '../../types';

export const getCountries = (state: IStateCountries): ICountry[] =>
  state.countries;

export const getCountry = (state: IStateCountry): ICountry => state.country;

export const getError = (state: IStateError): ICountriesError => state.error;

export const getCovidHistory = (state: IStateCovidHistory): ICovidHistory =>
  state.history;
