import { useEffect, useState } from "react";
import axios from "axios";
import CountrySearch from "../countrySearch";
import { motion } from "framer-motion";
import StatusRoader from "../StatusRoader";
import TourItem from "../TourItem";
import { Link } from "react-router-dom";
import { Button } from "../Button";

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
    <motion.section
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      exit={{
        x: "100%",
        transition: { duration: 0.3 },
        rotate: 180,
      }}
      className="country-choise"
      style={{ backgroundImage: `url( ${country.backgroundImage} )` }}
    >
      <div className="container country-choise__container">
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
          <Link to={"/country"}>
            <Button
              text="Select"
              backgroundColor="#F0E33F"
              color="#000000"
              border="none"
              padding="4px 55px"
            />
          </Link>
        </div>

        <h2 className="country-choise__tours-title">Top tour</h2>
        <ul className="country-choise__top-tours">
          {country.bestTours &&
            country.bestTours.map((tour) => (
              <TourItem
                image={tour.image}
                title={tour.tourName}
                reviews={tour.reviews}
                tourId={tour.tourId}
              />
            ))}
        </ul>
        <StatusRoader statusNumber={3} statusName="Choose a country" />
      </div>
    </motion.section>
  );
}
