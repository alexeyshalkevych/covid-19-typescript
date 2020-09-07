import React, { useState } from 'react';
import ControlSelect from '../ControlSelect/ControlSelect';
import { Cases } from '../../types';
import Map from '../Map/Map';
import CovidInformation from '../CovidInformation/CovidInformation';
import CovidStatistics from '../CovidStatistics/CovidStatistics';
import 'leaflet/dist/leaflet.css';
import './App.css';

const App: React.FC = () => {
  const [cases, setCases] = useState<Cases>('cases');

  const setCasesState = (cases: Cases): void => {
    setCases(cases);
  };

  return (
    <div className="App">
      <div className="App__left">
        <div className="App__header">
          <h1>COVID-19 Tracker</h1>
          <ControlSelect />
        </div>
        <CovidStatistics cases={cases} onSetCases={setCasesState} />
        <Map casesType={cases} />
      </div>
      <CovidInformation cases={cases} />
    </div>
  );
};

export default App;
