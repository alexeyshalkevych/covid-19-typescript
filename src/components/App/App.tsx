import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ControlSelect from '../ControlSelect/ControlSelect';
import InfoBox from '../InfoBox/InfoBox';
import { getCountry } from '../../store/selectors/covidSelectors';
import { Cases } from '../../types';
import Map from '../Map/Map';
import 'leaflet/dist/leaflet.css';
import './App.css';
import CovidInformation from '../CovidInformation/CovidInformation';

const App: React.FC = () => {
  const country = useSelector(getCountry);
  const [cases, setCases] = useState<Cases>('cases');

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
      <CovidInformation cases={cases} />
    </div>
  );
};

export default App;
