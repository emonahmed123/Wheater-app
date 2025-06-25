import { useState } from "react";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTempereature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: ""

    })



    const [loading, setLoading] = useState({
        state: false,
        message: ""
    });

    const [error, setError] = useState(null)

    const fetchWeaterhData = async (latitude, longitude) => {
        try {


            setLoading({
                ...loading,
                state: true,

                meassage: "Fetching wether data "
            })

            const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${import.meta.env.VITE_WEATER_API_KEY}&units=metric`);
            if (!response.ok) {
                const errorMessage = `Fetching weather data failed: ${response.status}`;
                throw new Error(errorMessage);
            }
            const data = await response.json();
            setWeatherData({
                ...weatherData,
                location: data?.name,
                climate: data?.weather?.[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTempereature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude
            });


        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading({
                ...loading,
                state: true,

                meassage: ""
            })
        }

    }



}