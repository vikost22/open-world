import { Button } from "../Button";
import StatusRoader from "../StatusRoader";

export function TourIntro(props) {
  const { item, index } = props;
  return (
    <section className="tour-intro" key={index}>
      <div className="intro__wrapper">
        <div className="container">
          <StatusRoader statusNumber={5} statusName="Book tour" />
          <h2 className="tour-slogan">
            {item.title.split(", ").map((word, wordIndex) => (
              <span
                className={`text-layer text-position-${wordIndex}`}
                key={wordIndex}>
                {word}
                <span className="text--3d">{word}</span>
              </span>
            ))}
          </h2>
          <div className="tour-intro-btn__wrapper">
            <Button
              className="project-button"
              text="Book now"
              color="#1E1E1E"
              padding="5px 56px"
              lineHigh="40px"
              size="24px"
              backgroundColor="#F0E33F"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
