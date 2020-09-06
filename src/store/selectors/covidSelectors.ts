import { IMyCountry, ICountriesError } from '../../types';

interface IStateCountries {
  countries: IMyCountry[];
}

interface IStateError {
  error: ICountriesError;
}

export const getCountries = (state: IStateCountries): IMyCountry[] =>
  state.countries;

export const getError = (state: IStateError): ICountriesError => state.error;
