import AppLayout from "./components/AppLayout/AppLayout";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <AppLayout />
    </WeatherProvider>
  );
}

export default App;
