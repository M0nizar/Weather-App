import DailySection from "./DailySection";
import GeneralSection from "./GeneralSection";
import HourlySection from "./HourlySection";
import Search from "./Search";

function MainPart() {
  return (
    <div className="mainPart-container">
      <Search />
      <div className="data-section">
        <div className="left">
          <GeneralSection />
          <DailySection />
        </div>
        <div className="right">
          <HourlySection />
        </div>
      </div>
    </div>
  );
}

export default MainPart;
