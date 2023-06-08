export function TripPlan(props) {
  const { item } = props;
  return (
    <section className="plan-section">
      <div className="container">
        <h3 className="about-page-title">TRIP PLAN</h3>
        <ul className="trip-plan-list">
          {item.tripDays.map((trip, index) => (
            <li className="trip-plan-item" key={index + 2}>
              <img
                src={item.tripDaysImg[index]}
                alt={`tripImg`}
                className="trip-img"
                key={index}
              />
              <p className="trip-day" key={index + 3}>
                {index + 1} day
              </p>
              <p className="trip-day-description" key={index + 4}>
                {trip}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
