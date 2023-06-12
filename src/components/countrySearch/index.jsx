export default function CountrySearch(props) {
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
                props.setCountry(country);
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
