import { useSelector } from "react-redux";
import StatusRoader from "../components/StatusRoader";
import TourItem from "../components/TourItem";
import VideoAbout from "../components/videoAbout";
import ToursSlider from "../components/ToursSlider";
import Footer from "../components/footer";
import Reasons from "../components/reasons";
export function Country() {
  const country = useSelector((state) => state.countries.selectedCountry);
  return (
    <>
      <section
        className="country__background"
        style={{ backgroundImage: `url(${country.backgroundImagePage})` }}
      >
        <div className="country__intro">
          <div className="container country__container">
            <StatusRoader statusNumber={4} statusName="Select a tour" />
            <div className="country__title-info">
              <h1 className="country__title">Visit {country.name}</h1>
              <h2 className="country__subtitle">
                und get unforgettable emotions
              </h2>
              <p className="country__description">
                {country.countryDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
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
