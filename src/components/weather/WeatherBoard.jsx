import { useWeatherContext } from "../../context";
import AddToFavarate from "./AddToFavarate";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";
const WeatherBoard = () => {
  const { loading, error, weatherData } = useWeatherContext();

  console.log(weatherData);
  return (
    <div className="max-w-[1200px] mx-auto px-4 ">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          {loading.state ? (
            <p> {loading.message}</p>
          ) : (
            <>
              <div className="md:col-span-2">
                <AddToFavarate />
              </div>
              <WeatherHeadline />
              <WeatherCondition />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherBoard;
