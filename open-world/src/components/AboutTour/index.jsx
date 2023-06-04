import { Button } from "../Button";
import StatusRoader from "../StatusRoader";
import { useState } from "react";
import Footer from "../footer";
import { TourIntro } from "../../TourIntro";
import { TourDescription } from "../TourDescription";
import { TourLocation } from "../TourLocation";
import { TripPlan } from "../TripPlan";
import { TourEquipment } from "../TourEquipment";
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
    },
  ];
  return (
    <>
      {mochObj.map((item, index) => (
        <>
          <TourIntro item={item} index={index} />
          <TourDescription item={item} index={index} />
          <TourLocation item={item} index={index} />
          <TripPlan item={item} index={index} />
          <TourEquipment item={item} index={index} />
        </>
      ))}

      <Footer />
    </>
  );
}
