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
import { Line } from 'react-chartjs-2';

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

ChartJS.defaults.color = '#FFFFFF';
ChartJS.defaults.font.family = 'system-ui';

const TrafficChart = () => {
  // Generate timestamps for the last 7 days
  const labels = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  });

  // Cumulative traffic data (non-linear progression)
  const microsoftCopilot = [450, 600, 800, 1000, 1200, 1500, 2000];
  const chatGPT = [350, 500, 700, 900, 1100, 1300, 1600];
  const claude = [200, 300, 400, 600, 900, 1200, 1500];

  const data = {
    labels,
    datasets: [
      {
        label: 'Microsoft Copilot',
        data: microsoftCopilot,
        borderColor: '#2563EB', // Blue
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        fill: true,
        tension: 0.4,
        order: 3
      },
      {
        label: 'ChatGPT',
        data: chatGPT,
        borderColor: '#16A34A', // Green
        backgroundColor: 'rgba(22, 163, 74, 0.2)',
        fill: true,
        tension: 0.4,
        order: 2
      },
      {
        label: 'Claude',
        data: claude,
        borderColor: '#DC2626', // Red
        backgroundColor: 'rgba(220, 38, 38, 0.2)',
        fill: true,
        tension: 0.4,
        order: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.5,
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 18,
          boxHeight: 18,
          padding: 25,
          color: '#FFFFFF', // Ensure legend text is white
          font: {
            family: 'system-ui',
            size: 13,
            weight: '600'
          },
          generateLabels: function(chart) {
            const datasets = chart.data.datasets;
            return datasets.map((dataset, i) => ({
              text: dataset.label,
              fillStyle: dataset.borderColor,
              strokeStyle: dataset.borderColor,
              lineWidth: 0,
              hidden: !chart.isDatasetVisible(i),
              index: i
            }));
          }
        }
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleColor: '#ffffff',
        bodyColor: '#FFFFFF',
        borderColor: '#374151',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y}`;
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#FFFFFF',
          font: {
            family: 'system-ui',
            size: 11,
            weight: '500'
          },
          padding: 8
        }
      },
      y: {
        stacked: false,
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#FFFFFF',
          font: {
            family: 'system-ui',
            size: 11,
            weight: '500'
          },
          padding: 8
        }
      }
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        borderWidth: 2
      }
    }
  };

  return (
    <div className="chart-card full-width">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white text-sm font-semibold">Traffic (Tokens)</h3>
        <div className="flex items-center gap-2">
          <span className="text-white text-xs">Last 7 days</span>
          <button className="text-white hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default TrafficChart;
