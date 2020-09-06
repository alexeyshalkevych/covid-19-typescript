import { ICountriesError, ICountry, ICovidHistory } from '../../types';

interface IStateCountries {
  countries: ICountry[];
}

interface IStateError {
  error: ICountriesError;
}

interface IStateCountry {
  country: ICountry;
}

interface IStateCovidHistory {
  history: ICovidHistory;
}

export const getCountries = (state: IStateCountries): ICountry[] =>
  state.countries;

export const getCountry = (state: IStateCountry): ICountry => state.country;

export const getError = (state: IStateError): ICountriesError => state.error;

export const getCovidHistory = (state: IStateCovidHistory): ICovidHistory =>
  state.history;
