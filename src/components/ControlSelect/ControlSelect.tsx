import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_COUNTRIES, FETCH_COUNTRY } from '../../constants/actionTypes';
import { getCountries } from '../../store/selectors/covidSelectors';
import getCountriesNameAndValue from '../../helpers/getCountriesNameAndValue';
import { ICountry, IStateCountries } from '../../@types/types';
import './ControlSelector.css';

const ControlSelect: React.FC = () => {
  const [countryField, setCountryField] = useState<string>('worldwide');
  const dispatch = useDispatch();
  const countries = getCountriesNameAndValue(
    useSelector<IStateCountries, ICountry[]>(getCountries),
  );

  useEffect(() => {
    const value = 'worldwide';
    dispatch({ type: FETCH_COUNTRY, value });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: FETCH_COUNTRIES });
  }, [dispatch]);

  const chnageSelectHandler = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    const value = event.target.value as string;

    dispatch({ type: FETCH_COUNTRY, value });

    setCountryField(value);
  };

  return (
    <FormControl className="formControl">
      <Select
        variant="outlined"
        value={countryField}
        onChange={chnageSelectHandler}
      >
        <MenuItem value="worldwide">Worldwide</MenuItem>
        {countries.map(country => (
          <MenuItem value={country.value} key={country.value + country.name}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ControlSelect;
