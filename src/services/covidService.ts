import axios from 'axios';
import { ICountry, IMyCountry } from '../types';

axios.defaults.baseURL = 'https://disease.sh/';

export const fetchCountries = async (): Promise<IMyCountry[]> => {
  const { data } = await axios.get('v3/covid-19/countries');

  return data.map((country: ICountry) => ({
    name: country.country,
    value: country.countryInfo.iso2,
  }));
};

export const fetchCountry = async (countryCode: string): Promise<ICountry> => {
  switch (countryCode) {
    case 'worldwide': {
      const { data } = await axios.get('/v3/covid-19/all');
      return data;
    }

    case countryCode: {
      const { data } = await axios.get(`/v3/covid-19/countries/${countryCode}`);
      return data;
    }
    default:
      return {} as ICountry;
  }
};
