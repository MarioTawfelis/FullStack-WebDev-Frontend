import { useEffect, useState } from 'react/ts5.0'
import countryService from '../services/countries'


const Country = ({ country }) => {
    const [weather, setWeather] = useState([])
    
    useEffect(() => {
        const capitalCity = country.capital;
    
        countryService.getWeatherInfo(capitalCity)
          .then((weatherInfo) => {
            setWeather(weatherInfo);
          })
          .catch((error) => {
            console.error('Error fetching weather info:', error);
          });
      }, []);

    
    
    return (
        
        <div>
            <h1>{country.name.common}</h1>
            <p>{country.capital}</p>
            <p>area {country.area}</p>
            <h4>languages:</h4>
            <ul>

            {Object.entries(country.languages).map(([key,value]) =>
                <li key={key}>{value}</li>
            )}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}></img>
            <h2>Weather in {country.capital}</h2>
            <p>temperature: {weather.main?.temp} Fahrenheit</p>
        </div>
        
    )
}

export default Country