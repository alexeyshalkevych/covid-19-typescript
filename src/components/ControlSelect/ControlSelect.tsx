import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { IMyCountry } from '../../types';
import { fetchCountries } from '../../services/covidService';

const ControlSelect: React.FC = () => {
  const [country, setCountry] = useState<string>('worldwide');
  const [countries, setCountries] = useState<IMyCountry[]>([]);

  useEffect(() => {
    const fetchDataCountries = async () => {
      const countriesData = await fetchCountries();

      setCountries(countriesData);
    };

    fetchDataCountries();
  }, []);

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
