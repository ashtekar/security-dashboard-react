import { useState } from 'react';
import LineChart from './LineChart';

const PerformanceCharts = () => {
  const [performanceData] = useState({
    latency: {
      title: 'Latency',
      data: [150, 145, 160, 140, 170, 155, 165],
      color: '#3b82f6' // accent-blue
    },
    cost: {
      title: 'Cost Per Million Token',
      data: [0.8, 0.75, 0.85, 0.82, 0.79, 0.81, 0.78],
      color: '#10b981' // accent-green
    },
    throughput: {
      title: 'Throughput',
      data: [450, 480, 460, 520, 490, 495, 470],
      color: '#ef4444' // accent-red
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(performanceData).map(([key, chartData]) => (
        <LineChart
          key={key}
          title={chartData.title}
          data={chartData.data}
          color={chartData.color}
        />
      ))}
    </div>
  );
};

export default PerformanceCharts;
