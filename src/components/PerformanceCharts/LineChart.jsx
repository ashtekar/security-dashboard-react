import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart = ({ title, data, color }) => {
  const createGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, `${color}80`); // 50% opacity
    gradient.addColorStop(1, `${color}00`); // 0% opacity
    return gradient;
  };

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      data: data,
      borderColor: color,
      tension: 0.4,
      fill: true,
      backgroundColor: function(context) {
        const chart = context.chart;
        const {ctx} = chart;
        return createGradient(ctx);
      }
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#242424',
        titleColor: '#ffffff',
        bodyColor: '#a0a0a0',
        borderColor: '#333333',
        borderWidth: 1,
        padding: 12,
        displayColors: false
      }
    },
    scales: {
      x: {
        grid: {
          color: '#333333'
        },
        ticks: {
          color: '#a0a0a0'
        }
      },
      y: {
        grid: {
          color: '#333333'
        },
        ticks: {
          color: '#a0a0a0'
        },
        beginAtZero: true
      }
    }
  };

  return (
    <div className="chart-card">
      <h3 className="text-text-secondary text-sm font-normal mb-4">{title}</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
