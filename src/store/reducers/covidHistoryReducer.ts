import {
  CovidHistoryState,
  ICovidHistory,
  IActionGetCovidHistory,
} from '../../types';
import { FETCH_COVID_HISTORY_SUCCESS } from '../../constants/actionTypes';

const initialState: CovidHistoryState = {} as ICovidHistory;

const covidHistoryReducer = (
  state = initialState,
  { type, payload }: IActionGetCovidHistory,
): CovidHistoryState => {
  switch (type) {
    case FETCH_COVID_HISTORY_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default covidHistoryReducer;
