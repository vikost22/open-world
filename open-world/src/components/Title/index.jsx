import { Button } from "../Button";
import StatusRoader from "../StatusRoader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export function Title() {
  return (
    <motion.section
      className="title-section"
      initial={{ width: 0, rotate: -180 }}
      animate={{ width: "100%", rotate: 0 }}
      exit={{
        x: "100%",
        transition: { duration: 0.3 },
        rotate: 180,
      }}
    >
      <div className="container">
        <div className="title-wrapper">
          <h1 className="title-slogan">
            EXPLORE
            <span className="title-slogan field--text">AND</span>
            TRAVEL
          </h1>
          <Link to={"/country"}>
            <Button
              text="Started"
              backgroundColor="#F0E33F"
              color="#000000"
              border="none"
              padding="4px 55px"
            />
          </Link>
          <StatusRoader statusNumber={1} statusName="Started" />
        </div>
      </div>
    </motion.section>
  );
}
