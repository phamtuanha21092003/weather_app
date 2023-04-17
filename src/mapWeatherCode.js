import cloudBolt from "./img/cloud-bolt.svg"
import cloudShowersHeavy from "./img/cloud-showers-heavy.svg"
import cloudSun from "./img/cloud-sun.svg"
import cloud from "./img/cloud.svg"
import smog from "./img/smog.svg"
import snowflake from "./img/snowflake.svg"
import sun from "./img/sun.svg"

export const mapWeatherCode = {}
addMapping([0, 1], sun)
addMapping([2], cloudSun)
addMapping([3], cloud)
addMapping([45, 48], smog)
addMapping(
  [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  cloudShowersHeavy
)
addMapping([71, 73, 75, 77, 85, 86], snowflake)
addMapping([95, 96, 99], cloudBolt)

function addMapping(value, key) {
  value.forEach((element) => {
    mapWeatherCode[element] = key
  })
}
