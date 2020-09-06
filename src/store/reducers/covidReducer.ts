import { FETCH_COUNTRIES_SUCCESS } from '../../constants/actionTypes';
import { IActionGetCountries, CountriesState } from '../../types';

const initialState: CountriesState = [];

const covidReducer = (
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

export default covidReducer;
