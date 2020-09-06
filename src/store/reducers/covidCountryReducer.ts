import { FETCH_COUNTRY_SUCCESS } from '../../constants/actionTypes';
import {
  IActionGetCountry,
  CountryState,
  ICountry,
  IAllCountry,
} from '../../types';

const initialState: CountryState = {} as ICountry | IAllCountry;

const covidCountryReducer = (
  state = initialState,
  { type, payload }: IActionGetCountry,
): CountryState => {
  switch (type) {
    case FETCH_COUNTRY_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default covidCountryReducer;
