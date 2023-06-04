import { Button } from "../Button";

export function TourBook(props) {
  const { item } = props;
  return (
    <section className="tour-book-section">
      <div className="container">
        <div className="book-tour-content__wrapper">
          <img
            className="book-tour-img"
            src={item.bookTourImg}
            alt="Tour img"
          />
          <div className="book-tour-content__text">
            <h3 className="book-title">DID YOU LIKE THE TOUR?</h3>
            <p className="book-paragraph">THEN BOOK QUICKLY</p>
            <Button
              text="Book Tour"
              backgroundColor="#F0E33F"
              color="#1E1E1E"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
