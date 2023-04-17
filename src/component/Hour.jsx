import { mapWeatherCode } from "../mapWeatherCode"
import React from "react"

export default function Hour({ hour: { time, weatherCode, temperature } }) {
  const HOUR_FORMATTER = Intl.DateTimeFormat(undefined, { hour: "2-digit" })
  return (
    <div className="flex flex-col items-center border-2  p-3 rounded-lg text-sm mobile:p-2">
      <div>{HOUR_FORMATTER.format(time)}</div>
      <img
        className="w-20 mobile:w-10"
        src={mapWeatherCode[weatherCode]}
        alt=""
      />
      <div>{temperature} &deg;</div>
    </div>
  )
}
