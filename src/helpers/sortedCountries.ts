import { ICountry } from '../types';

const sortedCountries = (countries: ICountry[]): ICountry[] =>
  [...countries].sort((a, b) => b.cases - a.cases);

export default sortedCountries;
