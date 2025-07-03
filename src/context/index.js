import { createContext, useContext } from "react"

const WeatherContext = createContext("")

const FavouriteContext = createContext("")

const LocationContext = createContext("")

const useWeatherContext = () => {
    return useContext(WeatherContext)

}

export { FavouriteContext, LocationContext, useWeatherContext, WeatherContext }

