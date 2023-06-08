const Countries = ({ countries }) => {
    return (
        <ul>
          {countries.map((country) => <li>{country.name.common}</li> )}
        </ul>
    )
}


export default Countries
