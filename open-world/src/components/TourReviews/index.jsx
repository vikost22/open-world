import { useState } from "react";

export function TourReviews(props) {
  const { item } = props;

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
            {item.reviews.map((review, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
