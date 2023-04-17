import React, { useEffect, useState } from "react"
import baseUrlAxios from "./baseUrlAxios"
import CurrentWeather from "./component/CurrentWeather"
import { useQuery } from "@tanstack/react-query"
import Hourly from "./component/Hourly"
import Daily from "./component/Daily"

export default function App() {
  const [hourly, setHourly] = useState(null)
  const [daily, setDaily] = useState([])
  const [currentWeather, setCurrentWeather] = useState(null)
  const { status } = useQuery({
    queryKey: ["fetchData"],
    queryFn: async () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      return await baseUrlAxios
        .get(
          "/forecast?latitude=21&longitude=105.75&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=windspeed_10m_max,weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,precipitation_sum,sunrise,sunset&current_weather=true",
          {
            params: {
              timezone,
            },
          }
        )
        .then((res) => res.data)
    },
    onSuccess: (data) => {
      nowWeather(data)
      hourlyWeather(data)
      dailyWeather(data)
    },
  })
  function dailyWeather({
    daily: {
      windspeed_10m_max,
      time,
      uv_index_max,
      weathercode,
      temperature_2m_max,
      temperature_2m_min,
    },
  }) {
    const days = time.map((time, index) => {
      return {
        time: new Date(time),
        windspeed: windspeed_10m_max[index],
        uv: uv_index_max[index],
        weatherCode: weathercode[index],
        temperatureMax: temperature_2m_max[index],
        temperatureMin: temperature_2m_min[index],
      }
    })
    setDaily(days)
  }
  function hourlyWeather({ hourly: { time, temperature_2m, weathercode } }) {
    let length = 0 // length of array current
    const hours = time
      .map((time, index) => {
        return {
          time: new Date(time),
          temperature: temperature_2m[index],
          weatherCode: weathercode[index],
        }
      })
      .filter(({ time }) => time > new Date() && length++ < 12) // app display next 12 hours
    setHourly(hours)
  }
  function nowWeather({
    current_weather: { temperature, time, windspeed },
    daily: {
      weathercode: [weathercode],
      temperature_2m_max: [temperature_2m_max],
      temperature_2m_min: [temperature_2m_min],
      uv_index_max: [uv_index_max],
      sunrise: [sunrise],
      sunset: [sunset],
    },
  }) {
    setCurrentWeather({
      temperature,
      time,
      windspeed,
      weathercode,
      temperature_2m_max,
      temperature_2m_min,
      uv_index_max,
      sunrise,
      sunset,
    })
  }
  if (status === "loading") return <h1>Loading</h1>
  if (status === "error") return <h1>Error</h1>
  return (
    <div className="flex justify-center">
      <div className="lg:w-2/3  w-full bg-[#b3e5ff]  ms-3 ">
        <CurrentWeather currentWeather={currentWeather} />
        <Hourly hourly={hourly} />
        <Daily daily={daily} />
      </div>
    </div>
  )
}
