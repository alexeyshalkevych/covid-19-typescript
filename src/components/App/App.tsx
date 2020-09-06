import React from 'react';
import { useSelector } from 'react-redux';
import ControlSelect from '../ControlSelect/ControlSelect';
import './App.css';
import InfoBox from '../InfoBox/InfoBox';
import { getCountry } from '../../store/selectors/covidSelectors';

const App: React.FC = () => {
  const country = useSelector(getCountry);

  return (
    <div className="App">
      <div className="App__left">
        <div className="App__header">
          <h1>COVID-19 Tracker</h1>
          <ControlSelect />
        </div>
        <div className="App__stats">
          <InfoBox
            title="Coronavirus Cases"
            cases={country.todayCases}
            total={country.cases}
          />
          <InfoBox
            title="Recovered"
            cases={country.todayRecovered}
            total={country.recovered}
          />
          <InfoBox
            title="Deaths"
            cases={country.todayDeaths}
            total={country.deaths}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
