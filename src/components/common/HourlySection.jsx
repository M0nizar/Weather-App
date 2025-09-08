import HourlyStatusCard from "./HourlyStatusCard";

function HourlySection() {
  return (
    <div className="hourly-section">
      <div className="filtering">
        <p>Hourly forecast</p>
        <div
          className="dropdown"
          style={{ backgroundColor: "var(--Neutral-600)" }}
        >
          Tuesday
        </div>
      </div>
      <div className="hourly-list">
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
      </div>
    </div>
  );
}

export default HourlySection;
