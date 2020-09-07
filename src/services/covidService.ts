import axios from 'axios';
import { ICountry, ICovidHistory } from '../@types/types';

axios.defaults.baseURL = 'https://disease.sh/';

export const fetchCountries = async (): Promise<ICountry[]> => {
  const { data } = await axios.get('v3/covid-19/countries');

  return data as ICountry[];
};

export const fetchCountry = async (countryCode: string): Promise<ICountry> => {
  switch (countryCode) {
    case 'worldwide': {
      const { data } = await axios.get('/v3/covid-19/all');
      return data as ICountry;
    }

    case countryCode: {
      const { data } = await axios.get(`/v3/covid-19/countries/${countryCode}`);
      return data as ICountry;
    }
    default:
      return {} as ICountry;
  }
};

export const fetchCovidHistoryByLastThreeMonth = async (): Promise<
  ICovidHistory
> => {
  const { data } = await axios.get('/v3/covid-19/historical/all?lastdays=120');

  return data as ICovidHistory;
};
