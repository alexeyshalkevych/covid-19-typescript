import { IMyCountry, ICountriesError, ICountry } from '../../types';

interface IStateCountries {
  countries: IMyCountry[];
}

interface IStateError {
  error: ICountriesError;
}

interface IStateCountry {
  country: ICountry;
}

export const getCountries = (state: IStateCountries): IMyCountry[] =>
  state.countries;

export const getCountry = (state: IStateCountry): ICountry => state.country;

export const getError = (state: IStateError): ICountriesError => state.error;
