import axios from 'axios';
import { ICountry, IMyCountry, ICovidHistory } from '../@types/types';

axios.defaults.baseURL = 'https://disease.sh/';

export const fetchCountries = async (): Promise<IMyCountry[]> => {
  const { data } = await axios.get('v3/covid-19/countries');

  return data;
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

export const fetchCovidHistoryByLastThreeMonth = async (): Promise<
  ICovidHistory
> => {
  const { data } = await axios.get('/v3/covid-19/historical/all?lastdays=120');

  return data;
};
