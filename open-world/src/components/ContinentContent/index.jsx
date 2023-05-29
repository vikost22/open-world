import { useEffect, useState } from "react";
import { Button } from "../Button";

export function ContinentContent(props) {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState(0); // Початково активний елемент - перший
  const [activeBack, setActiveBack] = useState(
    "../../../public/images/continent/Asia/asiaBack.png"
  );
  console.log(activeBack);
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeItem = data[activeIndex];
  const prevItem = data[activeIndex - 1];
  const nextItem = data[activeIndex + 1];

  useEffect(() => {
    setActiveBack(activeItem ? activeItem.background : null);
  }, [activeItem]);
  return activeItem ? (
    <>
      <section
        className="continent-section"
        style={{ backgroundImage: `url (${activeBack})` }}>
        <div className="container">
          <div className="continent-content__wrapper">
            <div className="continent-text">
              <a href="#" className="continent-slider" onClick={handlePrev}>
                {prevItem ? prevItem.name : data[data.length - 1].name}
              </a>
              <h2 className="continent-name">{activeItem.name}</h2>
              <a href="#" className="continent-slider" onClick={handleNext}>
                {nextItem ? nextItem.name : data[0].name}
              </a>
              <h2 className="continent-description">{activeItem.text}</h2>
              <Button
                text="Select"
                backgroundColor="#F0E33F"
                padding="4px 55px"
                color="#1E1E1E"
              />
            </div>
            <div className="tours-review">
              {activeItem.tours.map((tour, index) => (
                <div className="tours__photo" key={index}>
                  <img src={tour} alt={activeItem.toursPlace[index]} />
                  <p className="tour--place">{activeItem.toursPlace[index]}</p>
                  <p className="tour--stars">{activeItem.toursStars[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  ) : null;
}
