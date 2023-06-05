import { useState, useEffect } from "react";

export function TourReviews(props) {
  const { item } = props;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 468);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeft = () => {
    if (selectedReview > 0) {
      setSelectedReview(selectedReview - 1);
    } else {
      setSelectedReview(item.reviews.length - 1);
    }
  };

  const handleRight = () => {
    if (selectedReview < item.reviews.length - 1) {
      setSelectedReview(selectedReview + 1);
    } else {
      setSelectedReview(0);
    }
  };

  const [selectedReview, setSelectedReview] = useState(0);
  const handleReviewClick = (index) => {
    setSelectedReview(index);
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <h3 className="about-page-title reviews--title">REVIEWS</h3>
        <div className="reviews-list">
          <p className={"review-text"}>{item.reviews[selectedReview]}</p>
          <div className="review-img__wrapper">
            {!isMobile ? (
              item.reviews.map((review, index) => (
                <img
                  className={
                    selectedReview === index
                      ? "reviews-img reviews--active-img"
                      : "reviews-img"
                  }
                  src={item.reviewersPhoto[index]}
                  alt={index}
                  key={index}
                  onClick={() => handleReviewClick(index)}
                />
              ))
            ) : (
              <div className="reviewer__wrapper">
                <button
                  className="location-btn left--arrow"
                  onClick={() => handleLeft()}>
                  <img
                    src="./images/TourSection/arrowLeft.svg"
                    alt="arrow-left"
                  />
                </button>
                <img
                  className="reviews-img reviews--active-img"
                  src={item.reviewersPhoto[selectedReview]}
                  alt="reviewer img"
                />
                <button
                  className="location-btn right-arrow"
                  onClick={() => handleRight()}>
                  <img
                    src="./images/TourSection/arrowRight.svg"
                    alt="arrow-right"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
