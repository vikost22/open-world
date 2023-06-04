import { useState } from "react";
import { Button } from "../Button";

export default function ToursSlider(props) {
  const { tours } = props;
  const [firstTour, setFirstTour] = useState(tours[0]);
  const [prevTour, setPrevTour] = useState(tours[1]);
  const [activeTour, setActiveTour] = useState(tours[2]);
  const [lastTour, setLastTour] = useState(tours[3]);
  function selectNewTour(itemID) {
    const clickIndex = tours.findIndex((tour) => tour.tourId === itemID);
    let firstIndex;
    if (clickIndex === 0) {
      firstIndex = 2;
    } else if (clickIndex === 1) {
      firstIndex = tours.length - 1;
    } else {
      firstIndex = clickIndex - 2;
    }
    const prevIndex = firstIndex === tours.length - 1 ? 0 : firstIndex + 1;
    const lastIndex = clickIndex === tours.length - 1 ? 0 : clickIndex + 1;

    setFirstTour(tours[firstIndex]);
    setPrevTour(tours[prevIndex]);
    setActiveTour(tours[clickIndex]);
    setLastTour(tours[lastIndex]);
  }
  const reviewStars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= activeTour.reviews) {
      reviewStars.push(
        <img
          src={"./images/icons/countries/review-star-active.svg"}
          className="tour__star-review "
          width={40}
          height={40}
        />
      );
      continue;
    }
    reviewStars.push(
      <img
        src={"./images/icons/countries/review-star.svg"}
        className="tour__star-review "
        width={40}
        height={40}
      />
    );
  }
  return (
    <section className="tour-slider">
      <h2 className="tour-slider__title">TOURS</h2>
      <p className="tour-slider__subtitle">TOURS OF OUR AGENCY</p>

      <div className="tour-slider__content">
        <div className="tour-slider__image-content">
          <img
            src={activeTour.imageTour}
            alt=""
            width={868}
            height={711}
            className="tour-slider__image"
          />
          <div className="tour-slider__tour-info">
            <p className="tour-slider__tour-price">{activeTour.price}$</p>
            {reviewStars}
            <p className="tour-slider__tour-name">{activeTour.tourName}</p>
          </div>
        </div>

        <div className="container tour-slider__container">
          <ul className="tour-slider__tours">
            <li
              className="tour-slider__tour-item tour-slider-item"
              onClick={() => selectNewTour(firstTour.tourId)}
            >
              <p className="tour-slider-item__name">{firstTour.tourName}</p>
              <p className="tour-slider-item__descr">{firstTour.description}</p>
              <a href="" className="tour-slider-item__more">
                See more
              </a>
            </li>
            <li
              className="tour-slider__tour-item tour-slider-item"
              onClick={() => selectNewTour(prevTour.tourId)}
            >
              <p className="tour-slider-item__name">{prevTour.tourName}</p>
              <p className="tour-slider-item__descr">{prevTour.description}</p>
              <a href="" className="tour-slider-item__more">
                See more
              </a>
            </li>
            <li
              className="tour-slider__tour-item tour-slider-item tour-slider-item--active"
              onClick={() => selectNewTour(activeTour.tourId)}
            >
              <p className="tour-slider-item__name">{activeTour.tourName}</p>
              <p className="tour-slider-item__descr">
                {activeTour.description}
              </p>
              <a href="" className="tour-slider-item__more">
                See more
              </a>
            </li>
            <li
              className="tour-slider__tour-item tour-slider-item"
              onClick={() => selectNewTour(lastTour.tourId)}
            >
              <p className="tour-slider-item__name">{lastTour.tourName}</p>
              <p className="tour-slider-item__descr">{lastTour.description}</p>
              <a href="" className="tour-slider-item__more">
                See more
              </a>
            </li>
            <li className="book-btn-wrap">
              <Button
                text="Book now"
                backgroundColor="transparent"
                padding="11px 54px"
                color="#F0E33F"
                border={"1px solid #F0E33F"}
                lineHigh="18px"
                size="20px"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
