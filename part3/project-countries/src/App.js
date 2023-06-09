import { useState, useEffect } from "react";

import countryService from "./services/countries";
import CountryForm from "./components/CountryForm";
import Countries from "./components/Countries";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState([])

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
  };

  const handleSelectCountry = (event) => {
    const searchQuery = event.target.value.toLowerCase();

    const filteredCountries = countries.find((c) =>
      c.name.common.toLowerCase() === searchQuery
    );

    setFilteredCountries(filteredCountries);
  }



  return (
    <div>
      <CountryForm handleSearch={handleSearch}/>

      {filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]}/>
      ) : (
        <Countries countries={filteredCountries} handleShow={handleSelectCountry}/>
      )}
    </div>
  );
}

export default App;
