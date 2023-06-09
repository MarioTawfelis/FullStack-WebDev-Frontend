import axios from 'axios'

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"
const API_KEY = process.env.REACT_APP_API_KEY

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getWeatherInfo = (capitalCity) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&appid=${API_KEY}`)
    const weatherInfo = request.then(response => {
        console.log(response.data)
    })
}

const exportedObject = {
    getAll,
    getWeatherInfo
}

export default exportedObject

