import { FormWrapper } from "../FormWrapper";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export function ForgotForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: () => {},
  });
  return (
    <FormWrapper
      title="Forgot password?"
      description="Enter your email adress below and we wil email your new password.">
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
        <div className="btn__wrapper">
          <button
            onClick={formik.handleSubmit}
            type="submit"
            className="form-btn submit--btn">
            Sign in
          </button>
        </div>
      </form>
    </FormWrapper>
  );
}
