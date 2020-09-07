import React from 'react';
import { useSelector } from 'react-redux';
import numeral from 'numeral';
import { getCountries } from '../../store/selectors/covidSelectors';
import sortedCountries from '../../helpers/sortedCountries';
import { IStateCountries, ICountry } from '../../@types/types';
import './TableCountries.css';

const TableCountries: React.FC = () => {
  const countries = sortedCountries(
    useSelector<IStateCountries, ICountry[]>(getCountries),
  );

  return (
    <ul className="table">
      {countries.map(country => (
        <li key={`${country.countryInfo._id}${country.deaths}`}>
          <p>{country.country}</p>
          <p>
            <strong>{numeral(country.cases).format('0,0')}</strong>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default TableCountries;
