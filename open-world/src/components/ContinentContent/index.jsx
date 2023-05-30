import { useEffect, useState } from "react";
import { Button } from "../Button";
import TourItem from "../TourItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StatusRoader from "../StatusRoader";

export function ContinentContent(props) {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState(0); // Початково активний елемент - перший
  const [activeBack, setActiveBack] = useState(
    "../../../public/images/continent/Asia/asiaBack.png"
  );
  const handlePrev = (event) => {
    event.preventDefault();

    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (event) => {
    event.preventDefault();
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  

  const activeItem = data[activeIndex];
  const prevItem = data[activeIndex - 1];
  const nextItem = data[activeIndex + 1];

  const selectContinent = () => {
    localStorage.setItem("selectedContinent", JSON.stringify(activeItem.name).toLowerCase());
  };

  useEffect(() => {
    setActiveBack(activeItem ? activeItem.background : null);
  }, [activeItem]);
  return activeItem ? (
    <>
      <motion.section
        initial={{x: "-100%", opacity: 0}}
        animate={{ x: "0", opacity: 1 }}
        exit={{
          transition: { duration: 0.3 },
        }}
        className="continent-section"
        style={{
          backgroundImage: `url(${activeBack})`,
        }}
      >
        <div className="container">
          <div className="continent-content__wrapper">
            <div className="continent-text">
              <a href="#" className="continent-slider" onClick={handlePrev}>
                {prevItem ? prevItem.name : data[data.length - 1].name}
              </a>
              <h2 className="continent-name">{activeItem.name}</h2>
              <h2 className="continent-description">{activeItem.text}</h2>
              <Link to="/country" onClick={selectContinent}>
                <Button
                  text="Select"
                  backgroundColor="#F0E33F"
                  padding="4px 55px"
                  color="#1E1E1E"
                  lineHigh="40px"
                  size="24px"
                />
              </Link>
              <a href="#" className="continent-slider" onClick={handleNext}>
                {nextItem ? nextItem.name : data[0].name}
              </a>
            </div>
            <div className="tours-review">
              {activeItem.tours.map((tour, index) => (
                <TourItem
                  image={tour.image}
                  reviews={tour.reviews}
                  title={tour.tourName}
                  tourId={tour.tourId}
                  size="xl"
                  key={tour.id}
                />
              ))}
            </div>
          </div>
          <StatusRoader statusNumber={2} statusName="Choose a continent" />
        </div>
      </motion.section>
    </>
  ) : null;
}
