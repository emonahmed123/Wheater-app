import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeaterProvider } from "./provider";
function App() {
  return (
    <WeaterProvider>
      <div className="grid place-items-center h-screen lg:pt-30 2xl:pt-0">
        <Header />

        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeaterProvider>
  );
}

export default App;
