import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { signup } from "../store/actions/user.actions";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Enter your username"),
  password: Yup.string().required("Enter your password"),
  fullname: Yup.string().when("isSignup", {
    is: true,
    then: Yup.string().required("Enter your full name"),
  }),
});

export function SignUp({ isSignup = true }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const credentials = {
        ...values,
        imgUrl: uploadedImage,
      };

      await signup(credentials);
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const onUploadImg = (ev) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(ev.target.files[0]);
  };

  return (
    <div className="signup-container">
      <Formik
        initialValues={{
          username: "",
          password: "",
          fullname: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="auth-form">
            <Field name="username" placeholder="Enter your username" />
            {errors.username && touched.username && (
              <div>{errors.username}</div>
            )}

            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}

            {isSignup && (
              <>
                <Field name="fullname" placeholder="Enter your full name" />
                {errors.fullname && touched.fullname && (
                  <div>{errors.fullname}</div>
                )}
              </>
            )}

            {isSignup && (
              <div className="profile-pic-container">
                <input
                  type="file"
                  id="profile-pic"
                  accept="image/*"
                  onChange={onUploadImg}
                  style={{ display: "none" }}
                />
                <label htmlFor="profile-pic" className="profile-pic-label">
                  {uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="Profile"
                      className="profile-pic-preview"
                    />
                  ) : (
                    <span>Upload Profile Picture</span>
                  )}
                </label>
              </div>
            )}

<button type="submit" className="submit-button">{isSignup ? "Sign up" : "Continue"}</button>
          </Form>
        )}
      </Formik>
      <p
        onClick={() =>
          navigate(isSignup ? "/login" : "/signup", { replace: true })
        }
      >
        {isSignup ? "Already have an account? Log in" : "Create an account"}
      </p>
    </div>
  );
}
