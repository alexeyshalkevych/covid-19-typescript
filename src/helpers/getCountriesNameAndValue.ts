import { ICountry, IMyCountry } from '../@types/types';

const getCountriesNameAndValue = (countries: ICountry[]): IMyCountry[] => {
  return countries.map((country: ICountry) => ({
    name: country.country,
    value: country.countryInfo.iso2,
  }));
};

export default getCountriesNameAndValue;
