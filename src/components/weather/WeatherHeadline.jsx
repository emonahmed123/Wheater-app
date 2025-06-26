import CloudIcon from "../../assets/cloud.svg";
import pin from "../../assets/pin.svg";

import { useWeatherContext } from "../../context";
import { getFormatedDate } from "../../utils/Date_utils";
const WeatherHeadline = () => {
  const { loading, error, weatherData } = useWeatherContext();

  const { time, climate } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return CloudIcon;
      default:
        return CloudIcon;
    }
  }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(weatherData.temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} alt="pin" />
            <h2 className="text-2xl lg:text-[50px]">{weatherData.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormatedDate(time, "time", false)}-
        {getFormatedDate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadline;
