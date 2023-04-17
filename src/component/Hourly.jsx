import React from "react"
import Hour from "./hour"

export default function Hourly({ hourly }) {
  return (
    <section className="flex flex-wrap gap-4 mt-3  mobile:gap-[0.4rem]">
      {hourly.map((hour) => (
        <Hour hour={hour} />
      ))}
    </section>
  )
}
