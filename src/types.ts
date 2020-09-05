interface ICountryInfo {
  _id: number | null;
  iso2: string | null;
  iso3: string | null;
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
