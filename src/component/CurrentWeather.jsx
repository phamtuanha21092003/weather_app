import React from "react"
import { mapWeatherCode } from "../mapWeatherCode"

export default function CurrentWeather({
  currentWeather: {
    temperature,
    time,
    windspeed,
    weathercode,
    temperature_2m_max,
    temperature_2m_min,
    uv_index_max,
    sunrise,
    sunset,
  },
}) {
  const CURRENT_FORMATTER = Intl.DateTimeFormat(undefined, {
    weekday: "long",
    day: "2-digit",
    month: "long",
  })
  const SUN_FORMATTER = Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
  return (
    <section>
      <div className="font-black mobile:font-bold text-4xl">
        Ha Noi, Viet Nam
      </div>
      <div>{CURRENT_FORMATTER.format(new Date(time))}</div>
      <div className="flex my-2 flex-row mobile:flex-col mobile:items-center  justify-around">
        <div className="flex gap-12 justify-around items-center border-r-2 pr-[4.3rem] mobile:pr-0 mobile:border-r-0 ">
          <div>
            <img
              className="w-[105px]"
              src={mapWeatherCode[weathercode]}
              alt=""
            />
          </div>
          <div className="text-4xl mobile:text-3xl">{temperature} &deg;</div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-32 mobile:gap-[5rem] items-center justify-between">
            <div className="after:content-['High'] text-xl after:text-base after:block mobile:text-base mobile:after:text-xs">
              {temperature_2m_max} &deg;
            </div>
            <div className="after:content-['Wind'] text-xl after:text-base after:block mobile:text-base mobile:after:text-xs">
              {windspeed}mph
            </div>
            <div className="after:content-['Sunrise'] text-xl after:text-base after:block mobile:text-base mobile:after:text-xs">
              {SUN_FORMATTER.format(new Date(sunrise))}
            </div>
          </div>
          <div className="flex gap-32 mobile:gap-[5rem] items-center justify-between">
            <div className="after:content-['Low'] text-xl after:text-base after:block mobile:text-base mobile:after:text-xs">
              {temperature_2m_min} &deg;
            </div>
            <div className="after:content-['Uv'] text-xl after:text-base  after:block mobile:text-base mobile:after:text-xs">
              {uv_index_max}
            </div>
            <div className="after:content-['Sunset'] text-xl after:text-base after:block mobile:text-base mobile:after:text-xs">
              {SUN_FORMATTER.format(new Date(sunset))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
