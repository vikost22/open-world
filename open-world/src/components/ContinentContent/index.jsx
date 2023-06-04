import { useEffect, useState } from "react";
import { Button } from "../Button";
import TourItem from "../TourItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StatusRoader from "../StatusRoader";
import { useDispatch } from "react-redux";
import { selectContinent } from "../../redux/features/countries/countriesSlice";
import { useGetAllCountriesQuery } from "../../redux/services/countriesApi";

export function ContinentContent(props) {
  const dispatch = useDispatch();
  const { data } = useGetAllCountriesQuery("");
  const [activeIndex, setActiveIndex] = useState(0);
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

  const activeItem = data && data[activeIndex];
  const prevItem = data && data[activeIndex - 1];
  const nextItem = data && data[activeIndex + 1];

  const selectNewContinent = () => {
    dispatch(selectContinent(activeItem.name.toLowerCase()));
  };

  useEffect(() => {
    setActiveBack(activeItem ? activeItem.background : null);
  }, [activeItem]);
  return activeItem ? (
    <>
      <motion.section
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        exit={{
          transition: { duration: 0.3 },
        }}
        className="continent-section"
        style={{
          backgroundImage: `url(${activeBack})`,
        }}>
        <div className="container">
          <div className="continent-content__wrapper">
            <div className="continent-text">
              <a href="#" className="continent-slider" onClick={handlePrev}>
                {prevItem ? prevItem.name : data[data.length - 1].name}
              </a>
              <h2 className="continent-name">{activeItem.name}</h2>
              <h2 className="continent-description">{activeItem.text}</h2>
              <Link to="/countries" onClick={selectNewContinent}>
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
                <TourItem {...tour} size="xl" />
              ))}
            </div>
          </div>
          <StatusRoader statusNumber={2} statusName="Choose a continent" />
        </div>
      </motion.section>
    </>
  ) : null;
}
