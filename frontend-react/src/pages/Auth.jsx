import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SignUp } from "../cmps/SignUp.jsx";
import { login, signup } from "../store/actions/user.actions.js";
import { uploadService } from "../services/upload.service.js";

export function Auth() {
  const path = window.location.pathname;
  const isSignup = path.split("/").pop();

  const [userInfo, setUserInfo] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const navigate = useNavigate();

  function handleChange({ target }) {
    let { value, type, name: field, checked } = target;
    value = type === "number" ? +value : value;
    value = type === "checkbox" ? checked : value;
    setUserInfo((prevUser) => ({ ...prevUser, [field]: value }));
  }

  async function onSubmit() {
    const { fullname, username, password } = userInfo;

    const newUser = { username, password };

    if (isSignup) {
      newUser.fullname = fullname;
      newUser.imgUrl =
        uploadedImage ||
        `https://ui-avatars.com/api/?name=${fullname}&background=random&color=random`;
    }

    try {
      const user =
        isSignup === "signup" ? await signup(newUser) : await login(newUser);

      if (user) {
        navigate("/board");
      } else {
        console.error("User info is not valid");
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  return (
    <section className="login">
      <h5>
        {isSignup === "signup" ? "Sign up to continue" : "Log in to continue"}
      </h5>
      <SignUp
        onSubmit={onSubmit}
        handleChange={handleChange}
        isSignup={isSignup}
      />
    </section>
  );
}
