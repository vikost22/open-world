import { useState } from "react";

export function TourLocation(props) {
  const { item } = props;
  const [selectedTour, setSelectedTour] = useState(0);
  const handleTourClick = (index) => {
    setSelectedTour(index);
  };

  const handleLeft = (item) => {
    setSelectedTour((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return item.locationsPhoto.length - 1;
      }
    });
  };

  const handleRight = (item) => {
    setSelectedTour((prevIndex) => {
      if (prevIndex === item.locationsPhoto.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };
  return (
    <section className="tour-location">
      <div className="container">
        <h3 className="about-page-title">{item.locationTitle}</h3>
        <div className="locations__wrapper">
          <span
            className="location-arrow left--arrow"
            onClick={() => handleLeft(item)}>
            <img src="./images/TourSection/arrowLeft.svg" alt="arrow-left" />
          </span>
          {item.locationsPhoto.map((photo, index) => (
            <div
              className={`${
                index === selectedTour ? "active-tour" : "tour-content"
              }`}
              onClick={() => handleTourClick(index)}
              key={index}>
              <img
                className="location-photo"
                src={photo}
                alt={photo}
                width={index === selectedTour ? 300 : 194}
                height={index === selectedTour ? 450 : 291}
              />
              <p
                className={`${
                  index === selectedTour
                    ? "active-name"
                    : "locations-tour__name"
                }`}>
                {item.locations[index]}
              </p>
            </div>
          ))}
          <span
            className="location-arrow right-arrow"
            onClick={() => handleRight(item)}>
            <img src="./images/TourSection/arrowRight.svg" alt="arrow-right" />
          </span>
        </div>
      </div>
    </section>
  );
}
