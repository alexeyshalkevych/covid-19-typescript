interface ICountryInfo {
  _id: number | null;
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

export interface IAllCountry {
  updated: number;
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
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
}

export interface IMyCountry {
  name: string;
  value: string;
}

export interface IActionGetCountries {
  type: string;
  payload?: ICountry[];
}

export interface IActionGetCountry {
  type: string;
  payload?: ICountry | IAllCountry;
}

export interface ICountriesError {
  status: number;
  statusText: string;
}

export interface IActionCountriesError {
  type: string;
  payload: ICountriesError;
}

export interface ICovidHistory {
  cases: any;
  deathes: any;
  recovered: any;
}

export interface IActionGetCovidHistory {
  type: string;
  payload?: ICovidHistory;
}

export type CountriesState = ICountry[] | undefined;
export type CountryState = ICountry | IAllCountry | undefined;
export type CovidHistoryState = ICovidHistory | undefined;
export type ErrorState = ICountriesError | null;
