import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormWrapper } from "../FormWrapper";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "So short name!")
    .max(20, "So long name!")
    .matches(/^[^0-9]*$/, "Name cant have a numbers!")
    .required("Name is required"),
  surname: Yup.string()
    .min(2, "So short surname!")
    .matches(/^[^0-9]*$/, "Surname cant have numbers!")
    .max(20, "So long surname!")
    .required("Surname is required"),
  age: Yup.number()
    .typeError("Age must be a number!")
    .required("Age is required!"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password need to have minimum 8 symbols!")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must be same")
    .required("Confirm your password!"),
});

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPass = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
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
          <label className="form-label">
            Your name
            <input
              className="form-input"
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </label>
          {formik.touched.name && formik.errors.name ? (
            <div className="form-validation">{formik.errors.name}</div>
          ) : null}
          <label className="form-label">
            Your surname
            <input
              className="form-input"
              type="text"
              name="surname"
              id="surname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
            />
          </label>
          {formik.touched.surname && formik.errors.surname ? (
            <div className="form-validation">{formik.errors.surname}</div>
          ) : null}
          <label className="form-label">
            Your age
            <input
              className="form-input"
              type="text"
              name="age"
              id="age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
          </label>
          {formik.touched.age && formik.errors.age ? (
            <div className="form-validation">{formik.errors.age}</div>
          ) : null}
          <label className="form-label email--label">
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
            <img
              src="./images/login_page/emailSvg.svg"
              alt="email"
              className="form-icon"
            />
          </label>
          {formik.touched.email && formik.errors.email ? (
            <div className="form-validation">{formik.errors.email}</div>
          ) : null}
          <label className="form-label pass--label">
            Password
            <input
              className="form-input"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <img
              src="./images/login_page/passSvg.svg"
              alt="password"
              className="form-icon"
            />
            {showPassword ? (
              <img
                className="form-icon toggle--pass"
                src="./images/login_page/openPassword.png"
                alt="open"
                onClick={toggleShowPass}
              />
            ) : (
              <img
                className="form-icon toggle--pass"
                src="./images/login_page/closePassword.png"
                alt="close"
                onClick={toggleShowPass}
              />
            )}
          </label>
          {formik.touched.password && formik.errors.password ? (
            <div className="form-validation">{formik.errors.password}</div>
          ) : null}{" "}
          <label className="form-label pass--label">
            Confirm your Password
            <input
              className="form-input"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
          </label>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="form-validation">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
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
