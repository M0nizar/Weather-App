function HourlyStatusCard() {
  return (
    <div className="hourlyStatus-card">
      <div className="hourlyStatus-card-left">
        <div className="hourlyStatus-card-left-image">
          <img src="/images/Partly-Cloudy.svg" alt="" />
        </div>
        <p>3 PM</p>
      </div>
      <div className="hourly-status-card-right">
        <p>20</p>
      </div>
    </div>
  );
}

export default HourlyStatusCard;
