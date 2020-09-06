import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import { fetchCovidHistoryByLastThreeMonth } from '../../services/covidService';

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label(tooltipItem: any) {
        return numeral(tooltipItem.value).format('+0,0');
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          parser: 'MM/DD/YY',
          tooltipFormat: 'll',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback(value: any) {
            return numeral(value).format('0a');
          },
        },
      },
    ],
  },
};

const buildChartData = (data: any, casesType: string) => {
  const chartData: any = [];
  let lastDataPoint: number;

  Object.keys(data.cases || {}).forEach(date => {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  });

  return chartData;
};

interface ILineGraphProps {
  casesType: string;
}

const LineGraph: React.FC<ILineGraphProps> = ({ casesType }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCovidHistoryByLastThreeMonth();
      const chartData = buildChartData(data, casesType);

      setData(chartData);
    };

    fetchData();
  }, [casesType]);

  return (
    <div>
      {data.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: 'rgba(204, 16, 52, 0.5)',
                borderColor: '#CC1034',
                data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
};

export default LineGraph;
