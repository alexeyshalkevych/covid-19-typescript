import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import { fetchCovidHistoryByLastThreeMonth } from '../../services/covidService';
import { Cases, IGraph } from '../../@types/types';
import buildChartData from '../../helpers/buildChartData';

interface ITooltipItem {
  value: number;
}

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
      label(tooltipItem: ITooltipItem) {
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
          callback(value: number) {
            return numeral(value).format('0a');
          },
        },
      },
    ],
  },
};

interface ILineGraphProps {
  casesType: Cases;
}

const LineGraph: React.FC<ILineGraphProps> = ({ casesType }) => {
  const [data, setData] = useState<IGraph[]>([]);

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
                backgroundColor:
                  casesType === 'recovered'
                    ? 'rgba(65, 204, 1, 0.5)'
                    : 'rgba(204, 16, 52, 0.5)',
                borderColor: casesType === 'recovered' ? '#00350d' : '#CC1034',
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
