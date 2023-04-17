import React from "react"
import Day from "./Day"

export default function Daily({ daily }) {
  return (
    <section className="font-bold mt-4 flex flex-col gap-4 mobile:hidden">
      {daily.map((day) => (
        <Day day={day} />
      ))}
    </section>
  )
}
