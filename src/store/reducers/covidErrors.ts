import { FETCH_COUNTRIES_ERROR } from '../../constants/actionTypes';
import { ErrorState, IActionCountriesError } from '../../types';

const initialState: ErrorState = null;

const covidErrorReducer = (
  state = initialState,
  { type, payload }: IActionCountriesError,
): ErrorState => {
  switch (type) {
    case FETCH_COUNTRIES_ERROR:
      return payload;

    default:
      return state;
  }
};

export default covidErrorReducer;
