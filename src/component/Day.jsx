import React from "react"
import { mapWeatherCode } from "../mapWeatherCode"

export default function Day({ day }) {
  const WEAK_DAY_FORMATTER = Intl.DateTimeFormat(undefined, {
    weekday: "short",
  })
  const DAY_FORMATTER = Intl.DateTimeFormat(undefined, {
    month: "numeric",
    day: "numeric",
  })
  return (
    <div className="flex justify-around items-center">
      <div>
        {WEAK_DAY_FORMATTER.format(day.time)}
        <div className="font-light">{DAY_FORMATTER.format(day.time)}</div>
      </div>
      <img src={mapWeatherCode[day.weatherCode]} className="w-16" alt="" />
      <div className="after:block after:content-['Hight'] after:font-light">
        {day.temperatureMax} &deg;
      </div>
      <div className="after:block after:content-['Low'] after:font-light">
        {day.temperatureMin} &deg;
      </div>
      <div className="after:block after:content-['Speed'] after:font-light">
        {day.windspeed}mph
      </div>
      <div className="after:block after:content-['Uv'] after:font-light">
        {day.uv}
      </div>
    </div>
  )
}
