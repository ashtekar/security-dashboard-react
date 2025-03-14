const MetricsCard = ({ title, value, trend, trendValue }) => {
  const isTrendUp = trend === 'up';
  
  return (
    <div className="metric-card">
      <h3 className="text-text-secondary text-sm font-normal mb-2">{title}</h3>
      <div className="flex items-center gap-3">
        <span className="text-text-primary text-3xl font-semibold">{value}</span>
        <span className={`text-sm ${isTrendUp ? 'text-accent-green' : 'text-accent-red'}`}>
          {isTrendUp ? '+' : '-'}{trendValue}%
        </span>
      </div>
    </div>
  );
};

export default MetricsCard;
