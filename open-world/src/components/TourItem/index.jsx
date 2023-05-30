export default function TourItem(props) {
  const { image, reviews, title, size } = props;
  // image путь в папке public (./images/...)
  // reviews количество звезд
  // title назва туру
  // size по замовчуванню small для великої картинки передати "xl"
  const reviewStars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= reviews) {
      reviewStars.push(
        <img
          src={"./images/icons/countries/review-star-active.svg"}
          className="tour__star"
          alt={title}
        />
      );
      continue;
    }
    reviewStars.push(
      <img
        src={"./images/icons/countries/review-star.svg"}
        className="tour__star"
        width={12}
        height={12}
        alt={title}
      />
    );
  }
  return (
    <li className={`tour ${size === "xl" ? "tour-xl" : ""}`}>
      <button className="tour__fav">
        <img src="./images/icons/countries/fav.svg" alt="" />
      </button>
      <a href="#" className="tour__link">
        <img
          src={image}
          alt={title}
          className="tour__image"
          width={166}
          height={215}
        />
        <p className="tour__name">{title}</p>
        <div className="tour__stars">{reviewStars}</div>
      </a>
    </li>
  );
}

TourItem.defaultProps = {
  size: "small",
};
