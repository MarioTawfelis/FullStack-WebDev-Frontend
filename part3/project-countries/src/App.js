import { useState, useEffect } from "react";

import countryService from "./services/countries";
import CountryForm from "./components/CountryForm";
import Countries from "./components/Countries";
import Country from "./components/Country";

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
      <CountryForm handleSearch={handleSearch}/>

      {filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]}/>
      ) : (
        <Countries countries={filteredCountries}/>
      )}
    </div>
  );
}

export default App;
