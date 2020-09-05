import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';

type Contry = string | null;

const ControlSelect: React.FC = () => {
  const [countries, setCountries] = useState<Contry[]>([]);

  return (
    <FormControl>
      <Select variant="outlined" value="test">
        {countries.map(country => (
          <MenuItem value="worldwide" key={country}>
            {country}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ControlSelect;
