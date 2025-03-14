import { useState } from 'react';
import MetricsCard from '../MetricsCard/MetricsCard';
import PerformanceCharts from '../PerformanceCharts/PerformanceCharts';
import TrafficChart from '../TrafficAnalysis/TrafficChart';
import DistributionCharts from '../DistributionCharts/DistributionCharts';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

const Dashboard = () => {
  const [metrics] = useState([
    { title: 'Malicious Data Breaches', value: 62, trend: 'up', trendValue: 14 },
    { title: 'Recent Injection Blocks', value: 11, trend: 'up', trendValue: 2 },
    { title: 'Resource Response Blocks', value: 5, trend: 'down', trendValue: 1 }
  ]);

  return (
    <div className="min-h-screen bg-background-dark p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-medium text-text-primary mb-6">Security Dashboard</h1>
        
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricsCard
              key={index}
              title={metric.title}
              value={metric.value}
              trend={metric.trend}
              trendValue={metric.trendValue}
            />
          ))}
        </div>

        {/* Performance Charts Section */}
        <section className="mb-8">
          <h2 className="text-xl font-medium text-text-primary mb-4">Model Performance</h2>
          <PerformanceCharts />
        </section>

        {/* Traffic Analysis Section */}
        <section className="mb-8">
          <h2 className="text-xl font-medium text-text-primary mb-4">Traffic Analysis</h2>
          <TrafficChart />
        </section>

        {/* Distribution Charts Section */}
        <section className="mb-8">
          <h2 className="text-xl font-medium text-text-primary mb-4">Distribution</h2>
          <DistributionCharts />
        </section>

        {/* Activity Feed Section */}
        <section>
          <h2 className="text-xl font-medium text-text-primary mb-4">Activity Feed</h2>
          <ActivityFeed />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
