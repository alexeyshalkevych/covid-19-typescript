import React from 'react';
import { useSelector } from 'react-redux';
import { getCountry } from '../../store/selectors/covidSelectors';
import InfoBox from '../InfoBox/InfoBox';
import { Cases, IStateCountry, ICountry } from '../../@types/types';

interface ICovidStatisticsProps {
  cases: Cases;
  onSetCases: (cases: Cases) => void;
}

const CovidStatistics: React.FC<ICovidStatisticsProps> = ({
  cases,
  onSetCases,
}: ICovidStatisticsProps) => {
  const country = useSelector<IStateCountry, ICountry>(getCountry);

  return (
    <div className="App__stats">
      <InfoBox
        onClick={() => onSetCases('cases')}
        title="Coronavirus Cases"
        cases={country.todayCases}
        total={country.cases}
        isRed
        active={cases === 'cases'}
      />
      <InfoBox
        onClick={() => onSetCases('recovered')}
        title="Recovered"
        cases={country.todayRecovered}
        total={country.recovered}
        active={cases === 'recovered'}
      />
      <InfoBox
        onClick={() => onSetCases('deaths')}
        title="Deaths"
        cases={country.todayDeaths}
        total={country.deaths}
        isRed
        active={cases === 'deaths'}
      />
    </div>
  );
};

export default CovidStatistics;
