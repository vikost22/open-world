import { useSelector } from "react-redux";
import StatusRoader from "../components/StatusRoader";
import TourItem from "../components/TourItem";
import VideoAbout from "../components/videoAbout";
import ToursSlider from "../components/ToursSlider";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import Reasons from "../components/reasons";
import { useValidateCountry } from "../hooks/useValidateCountry";
export function Country() {
  const country = useSelector((state) => state.countries.selectedCountry);
  const isValidate = useValidateCountry(country);
  if (!isValidate) return;
  return (
    <>
      <motion.section
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        exit={{
          transition: { duration: 0.3 },
        }}
        className="country__intro"
        style={{
          backgroundImage: `linear-gradient(
            179.51deg,
            #1b2920 0.42%,
            rgba(38, 78, 54, 0) 37.98%,
            rgba(49, 62, 54, 0.38) 62.73%,
            #1b2920 93.89%
          ),url(${country.backgroundImagePage})`,
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container country__container">
          <StatusRoader statusNumber={4} statusName="Select a tour" />
          <div className="country__title-info">
            <h1 className="country__title">Visit {country.name}</h1>
            <h2 className="country__subtitle">
              und get unforgettable emotions
            </h2>
            <p className="country__description">{country.countryDescription}</p>
          </div>
        </div>
      </motion.section>
      <section className="country-top-tours">
        <h2 className="country-top-tours__title">POPULAR TOURS</h2>
        <ul className="country-top-tours__tours">
          {country.bestTours.map((tour) => (
            <TourItem {...tour} />
          ))}
        </ul>
      </section>
      <VideoAbout
        background={country.backgroundImageVideo}
        videoLink={country.videoLink}
      />
      <ToursSlider tours={country.tours} />
      <Reasons
        reasonsImages={country.reasonsImages}
        reasons={country.reasons}
      />
      <Footer />
    </>
  );
}
