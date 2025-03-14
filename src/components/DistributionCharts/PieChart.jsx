import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PieChart = ({ title, data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#a0a0a0',
          usePointStyle: true,
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: '#242424',
        titleColor: '#ffffff',
        bodyColor: '#a0a0a0',
        borderColor: '#333333',
        borderWidth: 1,
        padding: 12
      }
    }
  };

  return (
    <div className="chart-card">
      <h3 className="text-text-secondary text-sm font-normal mb-4">{title}</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
