import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import TableCountries from '../TableCountries/TableCountries';
import LineGraph from '../LineGraph/LineGraph';
import { Cases } from '../../@types/types';

interface ICovidInformationProps {
  cases: Cases;
}

const CovidInformation: React.FC<ICovidInformationProps> = ({ cases }) => {
  return (
    <Card>
      <CardContent>
        <div className="App__information">
          <h3>Live Cases by Country</h3>
          <TableCountries />
          <h3>Worldwide new {cases}</h3>
          <LineGraph casesType={cases} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CovidInformation;
