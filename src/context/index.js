import { createContext, useContext } from "react"

const WeatherContext = createContext("")

const FavouriteContext = createContext("")



const useWeatherContext = () => {
    return useContext(WeatherContext)

}

export { FavouriteContext, useWeatherContext, WeatherContext }

