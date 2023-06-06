import { useState, useEffect } from "react";

import countryService from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();

    const filteredCountries = countries.filter((c) =>
      c.name.common.toLowerCase().includes(searchQuery)
    );

    setFilteredCountries(filteredCountries);
    console.log("search complete...", filteredCountries.length);
  };

  return (
    <div>
      <form>
        <label>find countries </label>
        <input onChange={handleSearch}></input>
      </form>

      {filteredCountries.length === 1 ? (
        <div>
          <h1>{filteredCountries[0].name.common}</h1>
          <p>{filteredCountries[0].capital}</p>
          <p>area {filteredCountries[0].area}</p>
          <h4>languages:</h4>
          <ul>

            {Object.entries(filteredCountries[0].languages).map(([key,value]) =>
              <li key={key}>{value}</li>
            )}
          </ul>
          <p>{filteredCountries[0].flag}</p>
        </div>

      ) : (
        <ul>
          {filteredCountries.map((country) => <li>{country.name.common}</li> )}
        </ul>
        
      )}
    </div>
  );
}

export default App;
