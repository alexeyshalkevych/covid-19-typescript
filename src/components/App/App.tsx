import React from 'react';
import ControlSelect from '../ControlSelect/ControlSelect';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Covid 19 tracker</h1>
      <ControlSelect />
    </div>
  );
};

export default App;
