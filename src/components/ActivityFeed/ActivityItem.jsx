const ActivityItem = ({ type, message, time }) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'alert':
        return 'bg-accent-red text-white';
      case 'warning':
        return 'bg-[#f59e0b] text-white';
      case 'success':
        return 'bg-accent-green text-white';
      default:
        return 'bg-accent-blue text-white';
    }
  };

  return (
    <div className="activity-item mb-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getTypeStyles()}`}>
        {type === 'alert' && '⚠️'}
        {type === 'warning' && '⚡'}
        {type === 'success' && '✓'}
        {type === 'info' && 'ℹ️'}
      </div>
      <div className="flex-1">
        <p className="text-text-primary text-sm">{message}</p>
        <span className="text-text-secondary text-xs">{time}</span>
      </div>
    </div>
  );
};

export default ActivityItem;
