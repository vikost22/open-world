import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormWrapper } from "../FormWrapper";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export function RegisterForm() {
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
        title="Register"
        description="Please, fill in the form and after that we can create account for you">
        <form action="login" className="form">
          <label className="form-label email--label" htmlFor="email">
            Your email
          </label>
          <input
            className="form-input"
            type="text"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="form-validation">{formik.errors.email}</div>
          ) : null}
          <label className="form-label pass--label" htmlFor="password">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
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
              Remember me
            </label>
          </div>
          <div className="btn__wrapper">
            <button
              onClick={formik.handleSubmit}
              type="submit"
              className="form-btn submit--btn">
              Register
            </button>
            <button className="form-btn google--sign">
              Continue with Google
            </button>
          </div>
        </form>
        <p className="form-create">
          Already have a account?
          <Link to="/login" href="#" className="login-create create--link">
            Sign in
          </Link>
        </p>
      </FormWrapper>
    </>
  );
}
