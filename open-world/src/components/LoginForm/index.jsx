import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormWrapper } from "../FormWrapper";

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
    <>
      <FormWrapper
        title="Sign in"
        description="Enter your email adress below and we wil email your login page. You can sign in from your Afress which looks like this">
        <form action="login" className="form">
          <label className="form-label">
            Your email
            <input
              className="form-input"
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          {formik.touched.email && formik.errors.email ? (
            <div className="form-validation">{formik.errors.email}</div>
          ) : null}
          <label className="form-label">
            Password
            <input
              className="form-input"
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </label>
          {formik.touched.password && formik.errors.password ? (
            <div className="form-validation">{formik.errors.password}</div>
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
                className="toggle-btn"
              />
              Keep me signed in
            </label>
            <Link to="/forgot" className="forgot--link">
              Forgot password?
            </Link>
          </div>
          <div className="btn__wrapper">
            <button
              onClick={formik.handleSubmit}
              type="submit"
              className="form-btn submit--btn">
              Sign in
            </button>
            <button className="form-btn google--sign">
              Continue with Google
            </button>
          </div>
        </form>
        <p className="form-create">
          Don`t have an account?{" "}
          <Link to="/register" href="#" className="login-create create--link">
            Create a new account
          </Link>
        </p>
      </FormWrapper>
    </>
  );
}
