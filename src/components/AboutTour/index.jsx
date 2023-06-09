import Footer from "../footer";
import { TourIntro } from "../TourIntro";
import { TourDescription } from "../TourDescription";
import { TourLocation } from "../TourLocation";
import { TripPlan } from "../TripPlan";
import { TourEquipment } from "../TourEquipment";
import { TourReviews } from "../TourReviews";
import { TourBook } from "../TourBook";
import React from "react";
import { useSelector } from "react-redux";
import { useValidateTour } from "../../hooks/useValidateTour";
import SoonAdded from "../SoonAdded";
export function AboutTour() {
  const tour = useSelector((state) => state.tours.selectedTour);
  const isValid = useValidateTour(tour);
  if (!isValid) return <SoonAdded />;
  return (
    <>
      <TourIntro item={tour} />
      <TourDescription item={tour} />
      <TourLocation item={tour} />
      <TripPlan item={tour} />
      <TourEquipment item={tour} />
      <TourReviews item={tour} />
      <TourBook item={tour} />
      <Footer />
    </>
  );
}
