import React from 'react';
import { useSelector } from 'react-redux';
import { getCountries } from '../../store/selectors/covidSelectors';
import sortedCountries from '../../helpers/sortedCountries';
import './TableCountries.css';

const TableCountries: React.FC = () => {
  const countries = sortedCountries(useSelector(getCountries));

  return (
    <ul className="table">
      {countries.map(country => (
        <li key={`${country.countryInfo._id}${country.deaths}`}>
          <p>{country.country}</p>
          <p>
            <strong>{country.cases}</strong>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default TableCountries;
