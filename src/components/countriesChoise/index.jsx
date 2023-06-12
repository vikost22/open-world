import { useEffect, useState } from "react";
import CountrySearch from "../countrySearch";
import { motion } from "framer-motion";
import StatusRoader from "../StatusRoader";
import TourItem from "../TourItem";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { useGetCountriesByContinentQuery } from "../../redux/services/countriesApi";
import { useDispatch, useSelector } from "react-redux";
import { selectCountry } from "../../redux/features/countries/countriesSlice";

export default function CountriesChoise() {
  const continentName = useSelector(
    (state) => state.countries.selectedContinent
  );
  const dispatch = useDispatch();
  const { data } = useGetCountriesByContinentQuery(continentName);
  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );
  const [searchModalState, setSearchModalState] = useState(false);
  const [country, setCountry] = useState(null);

  function openSearch(e) {
    if (
      e.target.closest(".country-choise__country-name") ||
      e.target.closest(".country-choise__btn-country")
    ) {
      setSearchModalState(!searchModalState);
    }
    if (searchModalState) {
      setSearchModalState(!searchModalState);
    }
  }
  useEffect(() => {
    if (data) {
      if (!selectedCountry) {
        setCountry(data[0]);
      } else {
        setCountry(
          data.find(
            (country) => country.countryId === selectedCountry.countryId
          )
        );
      }
      dispatch(selectCountry(country));
    }
  }, [selectedCountry, data, dispatch, country]);
  return (
    <>
      {!country ? (
        <h2>Loading...</h2>
      ) : (
        <motion.section
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          exit={{
            transition: { duration: 0.3 },
          }}
          className="country-choise"
          style={{ backgroundImage: `url( ${country.backgroundImage} )` }}
          onClick={(e) => {
            openSearch(e);
          }}
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
                />
                <div
                  className={`country-search-wraper ${
                    searchModalState && "country-search-wraper--active"
                  }`}
                >
                  <CountrySearch
                    isOpen={searchModalState}
                    countries={data || []}
                    openSearch={setSearchModalState}
                    setCountry={setCountry}
                  />
                </div>
              </div>
              <p className="country-choise__description">
                {country.countryDescription}
              </p>
              <Link to={`/country`}>
                <Button
                  text="Select"
                  backgroundColor="#F0E33F"
                  color="#000000"
                  border="none"
                  padding="4px 55px"
                  size="24px"
                  lineHigh="40px"
                />
              </Link>
            </div>

            <h2 className="country-choise__tours-title">Top tours</h2>
            <ul className="country-choise__top-tours">
              {country.bestTours &&
                country.bestTours.map((tour, index) => (
                  <TourItem {...tour} key={index} />
                ))}
            </ul>
            <StatusRoader statusNumber={3} statusName="Choose a country" />
          </div>
        </motion.section>
      )}
    </>
  );
}
