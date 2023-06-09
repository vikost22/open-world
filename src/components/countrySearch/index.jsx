import { useDispatch } from "react-redux";
import { selectCountry } from "../../redux/features/countries/countriesSlice";

export default function CountrySearch(props) {
  const dispatch = useDispatch();
  return (
    <div
      className={`country-search ${
        props.isOpen ? "country-search--active" : ""
      }`}
    >
      <h2 className="country-search__title">Country search</h2>
      <ul className="country-search__countries">
        {props.countries.map((country) => {
          return (
            <li
              className="country-search__country"
              key={country.countryId}
              onClick={() => {
                dispatch(selectCountry(country));
                props.openSearch();
              }}
            >
              {country.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
