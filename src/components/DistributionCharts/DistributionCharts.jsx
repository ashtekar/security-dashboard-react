import { useState } from 'react';
import PieChart from './PieChart';

const DistributionCharts = () => {
  const [distributionData] = useState({
    teams: {
      title: 'Teams & Organization',
      data: {
        labels: ['Engineering', 'Product', 'Marketing', 'Sales', 'Support'],
        datasets: [{
          data: [35, 25, 15, 15, 10],
          backgroundColor: [
            '#3b82f6',
            '#10b981',
            '#f59e0b',
            '#ef4444',
            '#8b5cf6'
          ],
          borderColor: '#242424',
          borderWidth: 2
        }]
      }
    },
    applications: {
      title: 'Applications',
      data: {
        labels: ['Web App', 'Mobile App', 'API Gateway', 'Database', 'Others'],
        datasets: [{
          data: [40, 25, 20, 10, 5],
          backgroundColor: [
            '#3b82f6',
            '#10b981',
            '#f59e0b',
            '#ef4444',
            '#8b5cf6'
          ],
          borderColor: '#242424',
          borderWidth: 2
        }]
      }
    },
    gateways: {
      title: 'Gateways',
      data: {
        labels: ['Primary', 'Secondary', 'Backup', 'Development', 'Testing'],
        datasets: [{
          data: [45, 25, 15, 10, 5],
          backgroundColor: [
            '#3b82f6',
            '#10b981',
            '#f59e0b',
            '#ef4444',
            '#8b5cf6'
          ],
          borderColor: '#242424',
          borderWidth: 2
        }]
      }
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(distributionData).map(([key, chartData]) => (
        <PieChart
          key={key}
          title={chartData.title}
          data={chartData.data}
        />
      ))}
    </div>
  );
};

export default DistributionCharts;
