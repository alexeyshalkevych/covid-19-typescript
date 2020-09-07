import { FETCH_COUNTRIES_SUCCESS } from '../../constants/actionTypes';
import { IActionGetCountries, CountriesState } from '../../@types/types';

const initialState: CountriesState = [];

const covidCountriesReducer = (
  state = initialState,
  { type, payload }: IActionGetCountries,
): CountriesState => {
  switch (type) {
    case FETCH_COUNTRIES_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default covidCountriesReducer;
