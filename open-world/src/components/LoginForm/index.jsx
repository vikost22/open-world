import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: () => {},
  });
  return (
    <motion.section
      initial={{ width: 0, rotate: -180 }}
      animate={{ width: "100%", rotate: 0 }}
      exit={{
        x: "100%",
        transition: { duration: 0.3 },
        rotate: 180,
      }}
      className="login-section">
      <div className="container">
        <div className="login-form__wrapper">
          <h2 className="login__title">Sign in</h2>
          <p className="login__description">
            Enter your email adress below and we wil email your login page. You
            can sign in from your Afress which looks like this{" "}
          </p>
          <form action="login" className="login-form">
            <label className="form-label email--label" htmlFor="email">
              Your email
            </label>
            <input
              className="login-input"
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="form__validation">{formik.errors.email}</div>
            ) : null}
            <label className="form-label pass--label" htmlFor="password">
              Password
            </label>
            <input
              className="login-input"
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="form__validation">{formik.errors.password}</div>
            ) : null}
            <div className="forgot__wrapper">
              <label
                className="form-label sign--label"
                htmlFor="keepSign"
                onClick={(e) => {
                  e.preventDefault();
                  let target = e.target;
                  target.classList.toggle("active");
                }}>
                <input
                  type="checkbox"
                  name="keepSign"
                  id="keepSign"
                  className="keep--sign"
                />
                Keep me signed in
              </label>
              <a href="#" className="forgot--link">
                Forgot password?
              </a>
            </div>
            <div className="btn__wrapper">
              <button
                onClick={formik.handleSubmit}
                type="submit"
                className="form-btn submit--btn">
                Sign in
              </button>
              <button className="form-btn google--sign">
                Sign in with Google
              </button>
            </div>
          </form>
          <p className="login-create">
            Don`t have an account?{" "}
            <a href="#" className="login-create create--link">
              Create a new account
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
