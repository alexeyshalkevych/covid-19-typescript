import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent } from '@material-ui/core';
import ControlSelect from '../ControlSelect/ControlSelect';
import InfoBox from '../InfoBox/InfoBox';
import { getCountry } from '../../store/selectors/covidSelectors';
import TableCountries from '../TableCountries/TableCountries';
import LineGraph from '../LineGraph/LineGraph';
import Map from '../Map/Map';
import 'leaflet/dist/leaflet.css';
import './App.css';

const App: React.FC = () => {
  const country = useSelector(getCountry);
  const [cases, setCases] = useState<string>('cases');

  return (
    <div className="App">
      <div className="App__left">
        <div className="App__header">
          <h1>COVID-19 Tracker</h1>
          <ControlSelect />
        </div>
        <div className="App__stats">
          <InfoBox
            onClick={() => setCases('cases')}
            title="Coronavirus Cases"
            cases={country.todayCases}
            total={country.cases}
            isRed
            active={cases === 'cases'}
          />
          <InfoBox
            onClick={() => setCases('recovered')}
            title="Recovered"
            cases={country.todayRecovered}
            total={country.recovered}
            active={cases === 'recovered'}
          />
          <InfoBox
            onClick={() => setCases('deaths')}
            title="Deaths"
            cases={country.todayDeaths}
            total={country.deaths}
            isRed
            active={cases === 'deaths'}
          />
        </div>
        <Map casesType={cases} />
      </div>
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
    </div>
  );
};

export default App;
