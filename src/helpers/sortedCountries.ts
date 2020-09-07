import { ICountry } from '../@types/types';

const sortedCountries = (countries: ICountry[]): ICountry[] =>
  [...countries].sort((a, b) => b.cases - a.cases);

export default sortedCountries;
