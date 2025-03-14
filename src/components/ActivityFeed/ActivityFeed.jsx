import { useState } from 'react';
import ActivityItem from './ActivityItem';

const ActivityFeed = () => {
  const [activities] = useState([
    {
      type: 'alert',
      message: 'Multiple failed authentication attempts detected from IP 192.168.1.100',
      time: '2 minutes ago'
    },
    {
      type: 'warning',
      message: 'Unusual traffic pattern detected in API Gateway',
      time: '15 minutes ago'
    },
    {
      type: 'success',
      message: 'Security scan completed: No vulnerabilities found',
      time: '1 hour ago'
    },
    {
      type: 'info',
      message: 'System update scheduled for maintenance window',
      time: '2 hours ago'
    },
    {
      type: 'warning',
      message: 'Resource usage approaching threshold (85%)',
      time: '3 hours ago'
    }
  ]);

  return (
    <div className="bg-card-background rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-text-primary text-lg font-medium">Recent Activity</h3>
        <button className="action-button">View All</button>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            type={activity.type}
            message={activity.message}
            time={activity.time}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
