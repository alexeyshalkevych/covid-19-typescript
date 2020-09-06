interface ICountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}

export interface ICountry {
  updated: number;
  country: string;
  countryInfo: ICountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

export interface IMyCountry {
  name: string;
  value: string;
}

export interface IActionGetCountries {
  type: string;
  payload?: IMyCountry[];
}

export interface ICountriesError {
  status: number;
  statusText: string;
}

export interface IActionCountriesError {
  type: string;
  payload: ICountriesError;
}

export type CountriesState = IMyCountry[] | undefined;
export type ErrorState = ICountriesError | null;
