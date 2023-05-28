import { useEffect, useState } from "react";
import axios from "axios";
import CountrySearch from "../countrySearch";

export default function CountriesChoise() {
  const [country, setCountry] = useState({});
  const [allCuntries, setAllCuntries] = useState([]);
  const [searchModalState, setSearchModalState] = useState(false);

  function getCountries() {
    axios.get("./database/countries.json").then((response) => {
      setAllCuntries(response.data);
    });
  }
  function findCountry(id) {
    axios.get("./database/countries.json").then((response) => {
      const newCountry = response.data.find((item) => item.countryId === id);
      setCountry(newCountry);
    });
  }
  function openSearch() {
    setSearchModalState(!searchModalState);
  }
  useEffect(() => {
    getCountries();
    findCountry(1);
  }, []);
  return (
    <section
      className="country-choise"
      style={{ backgroundImage: `url( ${country.backgroundImage} )` }}
    >
      <div className="container">
        <div className="country-choise__info">
          <p className="country-choise__subtitle">travel to</p>
          <div className="country-choise__choose">
            <p className="country-choise__country-name">{country.name}</p>
            <button
              className={`country-choise__btn-country ${
                searchModalState && "country-choise__btn-country--active"
              }`}
              onClick={openSearch}
            />
            <div className="country-search-wraper">
              <CountrySearch
                isOpen={searchModalState}
                countries={allCuntries}
                setCountry={findCountry}
                openSearch={setSearchModalState}
              />
            </div>
          </div>
          <p className="country-choise__description">
            {country.countryDescription}
          </p>
          <button>Select</button>
        </div>
        <h2 className="country-choise-tours-title">Top tour</h2>
      </div>
    </section>
  );
}
