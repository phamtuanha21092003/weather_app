import axios from "axios"

const baseUrlAxios = axios.create({ baseURL: "https://api.open-meteo.com/v1" })
export default baseUrlAxios
