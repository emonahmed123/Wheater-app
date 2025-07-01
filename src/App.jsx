import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { FavouriteProvider, WeaterProvider } from "./provider";
function App() {
  return (
    <WeaterProvider>
      <FavouriteProvider>
        <div className="grid place-items-center h-screen lg:pt-30 2xl:pt-0">
          <Header />

          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeaterProvider>
  );
}

export default App;
