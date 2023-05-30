import { Link } from "react-router-dom";
import { Button } from "../Button";
import StatusRoader from "../StatusRoader";
import { motion } from "framer-motion";
export function Title() {
  return (
    <motion.section
      className="title-section"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      exit={{
        transition: { duration: 0.3 },
      }}
    >
      <div className="container">
        <div className="title-wrapper">
          <h1 className="title-slogan">
            EXPLORE
            <span className="title-slogan field--text">AND</span>
            TRAVEL
          </h1>
          <Link to={"/continent"}>
            <Button
              text="Started"
              backgroundColor="#F0E33F"
              color="#000000"
              border="none"
              padding="4px 55px"
              lineHigh="40px"
              size="24px"
            />
          </Link>
          <StatusRoader statusNumber={1} statusName="Started" />
        </div>
      </div>
    </motion.section>
  );
}
