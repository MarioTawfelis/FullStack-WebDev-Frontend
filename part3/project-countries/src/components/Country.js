const Country = ({ country }) => {
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
        </div>
        
    )
}

export default Country