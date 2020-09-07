import {
  FETCH_COVID_HISTORY_REQUEST,
  FETCH_COVID_HISTORY_SUCCESS,
  FETCH_COVID_HISTORY_ERROR,
} from '../../constants/actionTypes';
import {
  ICovidHistory,
  IActionGetCovidHistory,
  ICountriesError,
  IActionCountriesError,
} from '../../@types/types';

export const getCovidHistoryRequest = (): IActionGetCovidHistory => ({
  type: FETCH_COVID_HISTORY_REQUEST,
});

export const getCovidHistorySuccess = (
  histories: ICovidHistory,
): IActionGetCovidHistory => ({
  type: FETCH_COVID_HISTORY_SUCCESS,
  payload: histories,
});

export const getCovidHistoryError = (
  error: ICountriesError,
): IActionCountriesError => ({
  type: FETCH_COVID_HISTORY_ERROR,
  payload: error,
});
