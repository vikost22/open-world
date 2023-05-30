import { addToFavorites, removeFromFavorites } from "../../redux/features/tours/toursSlice";
import { useDispatch, useSelector } from "react-redux";
export default function TourItem(props) {
  const { image, reviews, title, tourId, size } = props;
  const dispatch = useDispatch();
  const addedToFav = useSelector((state) => state.tours.likedTours);
  const isAdded = addedToFav.find((tour) => tour.tourId === tourId);
  
  const reviewStars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= reviews) {
      reviewStars.push(
        <img
          src={"./images/icons/countries/review-star-active.svg"}
          className="tour__star"
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
      />
    );
  }
  function toggleToFavorites() {
    if (!isAdded) {
      dispatch(addToFavorites({ image, reviews, title, tourId }));
    }else{
      dispatch(removeFromFavorites( tourId ));
    }
  }
  return (
    <li className={`tour ${size === "xl" ? "tour-xl" : ""}`}>
      <button className="tour__fav" onClick={toggleToFavorites}>
        <img
          src={`./images/icons/countries/${isAdded ? "fav-full" : "fav"}.svg`}
          alt=""
        />
      </button>
      <a href="" className="tour__link">
        <img
          src={image}
          alt=""
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
