export default function Reasons(props) {
  const { reasonsImages, reasons } = props;
  return (
    <section className="reasons">
      <h2 className="reasons__title">REASONS</h2>
      <p className="reasons__subtitle">
        FIVE REASONS WHY YOU SHOUD VISIT VIETNAM
      </p>
      <div className="reasons__container container">
        <ul className="reasons__left-part">
          <li className="reasons__image-item first-images">
            <img src={reasonsImages[0]} alt="" className="firstImage" />
            <img src={reasonsImages[1]} alt="" className="secondImage" />
          </li>
          <li className="reasons__text-item">{reasons[2]}</li>
          <li className="reasons__text-item">{reasons[3]}</li>
          <li className="reasons__image-item">
            <img src={reasonsImages[2]} alt="" className="thirdImage" />
          </li>
        </ul>
        <ul className="reasons__right-part">
          <li className="reasons__text-item">{reasons[0]}</li>
          <li className="reasons__text-item">{reasons[1]}</li>
          <li className="reasons__image-item second-images">
            <img src={reasonsImages[3]} alt="" className="fourthImage" />
            <img src={reasonsImages[4]} alt="" className="fifthImage" />
            <img src={reasonsImages[5]} alt="" className="sixthImage" />
          </li>
          <li className="reasons__text-item">{reasons[4]}</li>
        </ul>
      </div>
      <img
        src="./images/icons/countries/bg-flower-1.svg"
        alt=""
        className="bg-flower-1"
        width={585}
        height={493}
      />
      <img
        src="./images/icons/countries/bg-flower-2.svg"
        alt=""
        className="bg-flower-2"
        width={613}
        height={620}
      />
      <img
        src="./images/icons/countries/bg-flower-3.svg"
        alt=""
        className="bg-flower-3"
        width={216}
        height={214}
      />
    </section>
  );
}
