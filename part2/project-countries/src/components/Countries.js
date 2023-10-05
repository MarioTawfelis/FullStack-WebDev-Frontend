import Country from "./Country";

const Countries = ({ countries, handleShow }) => {
  return (
    <div>
      {countries.length === 1 ? (
        <Country country={countries[0]} />
      ) : (
        <ul>
          {countries.map((country) => (
            <li key={`${country.tld}-${country.area}`}>
              {country.name.common}
              <button value={country.name.common} onClick={handleShow}>
                show
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Countries;
