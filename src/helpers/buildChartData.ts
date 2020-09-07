import { ICovidHistory, Cases, IGraph } from '../@types/types';

const buildChartData = (data: ICovidHistory, casesType: Cases): IGraph[] => {
  const chartData: IGraph[] = [];
  let lastDataPoint: number | undefined;

  Object.keys(data.cases || {}).forEach(date => {
    if (lastDataPoint) {
      const newDataPoint: IGraph = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  });

  return chartData;
};

export default buildChartData;
