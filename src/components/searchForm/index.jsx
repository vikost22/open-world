export default function SearchForm() {
    return <form action="#" className="search-form ">
    <input
      type="text"
      placeholder="Search here"
      className="search-form__input"
    />
    <button type="submit" className="search-form__btn">
      <img
        src="./images/icons/header/search-icon.svg"
        alt=""
        className="search-form__btn-icon"
        width="19"
        height="20"
      />
    </button>
  </form>
}