import { motion } from "framer-motion";

export function FormWrapper(props) {
  const { title, description, children } = props;
  return (
    <motion.section
      initial={{ width: 0, rotate: -180 }}
      animate={{ width: "100%", rotate: 0 }}
      exit={{
        x: "100%",
        transition: { duration: 0.3 },
        rotate: 180,
      }}
      className="form-section">
      <div className="container">
        <div className="form__wrapper">
          <h2 className="form-title">{title}</h2>
          <p className="form-description">{description}</p>
          {children}
        </div>
      </div>
    </motion.section>
  );
}
