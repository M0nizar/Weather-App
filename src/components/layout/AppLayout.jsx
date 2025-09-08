import MainPart from "../common/MainPart";
import Navbar from "../common/Navbar";

function AppLayout() {
  return (
    <div className="container">
      <Navbar />
      <p className="title">How’s the sky looking today?</p>
      <MainPart />
    </div>
  );
}

export default AppLayout;
