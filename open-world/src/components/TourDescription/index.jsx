export function TourDescription(props) {
  const { item, index } = props;
  return (
    <section className="description-section">
      <div className="container">
        <div className="tour-description__wrapper">
          <div className="about-text__wrapper">
            <h3 className="about-text-head">ABOUT</h3>
            <p className="about-tour-text">{item.aboutText}</p>
          </div>
          <img
            className="about-tour__img"
            src={item.aboutImg}
            alt={"about-img"}
            key={index}
          />
        </div>
      </div>
    </section>
  );
}
