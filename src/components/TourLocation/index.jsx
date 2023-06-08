import { useEffect, useState } from "react";

export function TourLocation(props) {
  const { item } = props;
  const [selectedTour, setSelectedTour] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 993);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <button
            className="location-btn left--arrow"
            onClick={() => handleLeft(item)}>
            <img src="./images/TourSection/arrowLeft.svg" alt="arrow-left" />
          </button>
          {!isMobile ? (
            item.locationsPhoto.map((photo, index) => (
              <div
                className={`${
                  index === selectedTour ? "active-tour" : "tour-content"
                }`}
                onClick={() => handleTourClick(index)}
                key={index}>
                <img
                  className={
                    index === selectedTour
                      ? "location-photo-active"
                      : "location-photo"
                  }
                  src={photo}
                  alt={photo}
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
            ))
          ) : (
            <div className="tour-content">
              <img
                className="location-photo"
                src={item.locationsPhoto[selectedTour]}
                alt={item.locationsPhoto[selectedTour]}
              />
              <p className="locations-tour__name">
                {item.locations[selectedTour]}
              </p>
            </div>
          )}
          <button
            className="location-btn right-arrow"
            onClick={() => handleRight(item)}>
            <img src="./images/TourSection/arrowRight.svg" alt="arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
