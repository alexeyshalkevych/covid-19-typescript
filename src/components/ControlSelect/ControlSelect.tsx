import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_COUNTRIES } from '../../constants/actionTypes';
import { getCountries } from '../../store/selectors/covidSelectors';

const ControlSelect: React.FC = () => {
  const [country, setCountry] = useState<string>('worldwide');
  const dispatch = useDispatch();
  const countries = useSelector(getCountries);

  useEffect(() => {
    dispatch({ type: FETCH_COUNTRIES });
  }, [dispatch]);

  const chnageSelectHandler = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    const value = event.target.value as string;

    setCountry(value);
  };

  return (
    <FormControl>
      <Select variant="outlined" value={country} onChange={chnageSelectHandler}>
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
