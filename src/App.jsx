import AppLayout from "./components/layout/AppLayout";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <AppLayout />
    </WeatherProvider>
  );
}

export default App;
