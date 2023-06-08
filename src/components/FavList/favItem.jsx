import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavorites,
  selectTour,
} from "../../redux/features/tours/toursSlice.js";
import { toggleModalState } from "../../redux/features/modal/modalSlice";
import { useNavigate } from "react-router-dom";

export default function FavItem(props) {
  const { name, reviewsCount, price, imageShort, tourId } = props;
  const reviewStars = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function removeItem() {
    dispatch(removeFromFavorites(tourId));
  }
  function showMore() {
    dispatch(selectTour(props));
    dispatch(toggleModalState());
    navigate("/about");
  }
  for (let i = 1; i <= 5; i++) {
    if (i <= reviewsCount) {
      reviewStars.push(
        <img
          src={"./images/icons/countries/review-star-active.svg"}
          className="tour__star"
          alt="star"
          width={24}
          height={24}
        />
      );
      continue;
    }
    reviewStars.push(
      <img
        src={"./images/icons/countries/review-star.svg"}
        className="tour__star"
        width={24}
        height={24}
        alt="star"
      />
    );
  }
  return (
    <li className="fav-item">
      <img
        src={imageShort}
        width={206}
        height={194}
        alt=""
        className="fav-item__image"
      />
      <div className="fav-item__info">
        <p className="fav-item__name">{name}</p>
        <div className="fav-item__review-stars">{reviewStars}</div>
        <p className="fav-item__price">{price}$</p>
        <button className="fav-item__more" onClick={showMore}>
          more
        </button>
      </div>
      <button className="remove-btn" onClick={removeItem}>
        <span className="remove-line"></span>
      </button>
    </li>
  );
}
