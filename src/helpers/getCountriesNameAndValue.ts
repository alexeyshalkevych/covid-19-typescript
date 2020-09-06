import { ICountry, IMyCountry } from '../types';

export const getCountriesNameAndValue = (
  countries: ICountry[],
): IMyCountry[] => {
  return countries.map((country: ICountry) => ({
    name: country.country,
    value: country.countryInfo.iso2,
  }));
};

export const test = (): string => 'test';
