import { createContext, useContext } from "react"

const WeatherContext = createContext("")





const useWeatherContext = () => {
    return useContext(WeatherContext)

}

export { useWeatherContext, WeatherContext }

