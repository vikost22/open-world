import Footer from "../footer";
import { TourIntro } from "../../TourIntro";
import { TourDescription } from "../TourDescription";
import { TourLocation } from "../TourLocation";
import { TripPlan } from "../TripPlan";
import { TourEquipment } from "../TourEquipment";
import { TourReviews } from "../TourReviews";
import { TourBook } from "../TourBook";
import React from "react";
export function AboutTour() {
  const mochObj = [
    {
      name: "Da Nang,Vietnam",
      background: "./images/TourSection/about-background.png",
      title: "CATCH, YOUR, WAVE",
      aboutText: `Join our thrilling surf tour and dive into the world of surfing. Experience the exhilaration of riding incredible waves and embrace the beauty of the ocean. 
      Led by experienced guides, we'll take you to breathtaking surf destinations, offering tailored instruction for surfers of all levels. 
      Immerse yourself in the local culture, create lifelong memories, and make the most of your surfing adventure with us.`,
      aboutImg: "./images/TourSection/tour-about.png",
      locationTitle: "SURFING SPOTS",
      locations: [
        "Da Nang,Vietnam",
        "Mui Ne,Vietnam",
        "Nha Trang,Vietnam",
        "Bình An,Vietnam",
        "Vung Tau,Vietnam",
      ],
      locationsPhoto: [
        "./images/TourSection/location/location1.png",
        "./images/TourSection/location/location2.png",
        "./images/TourSection/location/location3.png",
        "./images/TourSection/location/location4.png",
        "./images/TourSection/location/location5.png",
      ],
      tripDays: [
        "Day 1: Arrival in Vietnam and getting to know the place -Meet your surf instructor and have an orientation lesson on land. -Explore the coast and enjoy the beautiful beaches of Vietnam.",
        `Day 2: Start learning to surf
      -Start your morning by exercising and stretching to prepare for physical activity.
      Continue with your instructor's surf lessons throughout the morning.
      -Practice basic surf skills in shallow water to master balance and board control.`,
        `Day 3: Improve your surfing skills
      -Continue your morning surf training with an instructor.
      -Practice more complex maneuvers such as turns and jumping on the wave.
      -Enjoy the sunset on the beach and relax after an active day.`,
        `Day 4: Yachting party at sea
      After morning exercises and breakfast, go to a yachting party on the sea.
      -Rent a yacht and gather your group of friends for a fun and unforgettable day.
      -Enjoy crystal clear water, fresh air and beautiful views of the surrounding landscapes.`,
      ],
      tripDaysImg: [
        "./images/TourSection/plan/1.png",
        "./images/TourSection/plan/2.png",
        "./images/TourSection/plan/3.png",
        "./images/TourSection/plan/4.png",
      ],
      equipment: ["VESL PADDLE BOARD", "PADDLE BOARD", "STANDUP BOARD"],
      equipmentPhoto: [
        "./images/TourSection/equipment/1.png",
        "./images/TourSection/equipment/2.png",
        "./images/TourSection/equipment/3.png",
      ],
      reviews: [
        "I recently embarked on a surfing tour that left me with unforgettable memories. The instructors were friendly and knowledgeable, tailoring the lessons to suit all skill levels. Exploring various surf spots provided a unique and thrilling experience. The camaraderie within the group was incredible, and the accommodations and facilities were top-notch.",
        "2  thrilling experience. The camaraderie within the group was incredible, and the accommodations and facilities were top-notch.",
        "3 I recently embarked camaraderie within the group was incredible, and the accommodations and facilities were top-notch.",
        "4 I recently embarked on a surfing tour that left me with unforgettable memories. The instructors were friendly and knowledgeable,  The camaraderie within the group was incredible, and the accommodations and facilities were top-notch.",
        "5 , tailoring the lessons to suit all skill levels. Exploring various surf spots provided a unique and thrilling experience. The camaraderie within the group was incredible, and the accommodations and facilities were top-notch.",
      ],
      reviewersPhoto: [
        "./images/TourSection/reviews/1.png",
        "./images/TourSection/reviews/2.png",
        "./images/TourSection/reviews/3.png",
        "./images/TourSection/reviews/4.png",
        "./images/TourSection/reviews/5.png",
      ],
      bookTourImg: "./images/TourSection/book/BookBack.png",
    },
  ];
  return (
    <>
      {mochObj.map((item, index) => (
        <React.Fragment key={index}>
          <TourIntro item={item} />
          <TourDescription item={item} />
          <TourLocation item={item} />
          <TripPlan item={item} />
          <TourEquipment item={item} />
          <TourReviews item={item} />
          <TourBook item={item} />
        </React.Fragment>
      ))}

      <Footer />
    </>
  );
}
