import ModelOverlay from "./Model";
import { useSearchParams, redirect, useSubmit } from "react-router-dom";
import { useState } from "react";

const Auth = () => {
  const [searchParams] = useSearchParams();

  const submit = useSubmit();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mode = searchParams.get("mode");

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const handelForm = (event) => {
    event.preventDefault();
    let a = { action: mode, email: email, password: password };
    // console.log("===<>", a);
    submit(
      { action: mode, email: email, password: password },
      { method: "POST" }
    );
  };
  return (
    <ModelOverlay>
      <form onSubmit={handelForm}>
        <input
          type="email"
          placeholder="Enter your Email ID"
          name="email"
          onChange={emailHandler}
        />
        <input
          type="password"
          placeholder="Add password here"
          name="password"
          onChange={passwordHandler}
        />
        <button type="submit">{mode}</button>
      </form>
    </ModelOverlay>
  );
};
export default Auth;

export const action = async (body) => {
  const params = body.params;
  // console.log(params);
  const request = await body.request.formData();
  if (request.get("action") === "Signup") {
    const config = {
      email: request.get("email"),
      password: request.get("password"),
    };
    // console.log("----<", config);
    const responce = await fetch(
      "https://portfolio-b117d-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        body: JSON.stringify(config),
      }
    );
    let res = await responce.json();
    // console.log("-->", res);
    localStorage.setItem("authToken", res.name);
    return redirect("/");
  }
  if (request.get("action") === "Login") {
    const responce = await fetch(
      "https://portfolio-b117d-default-rtdb.firebaseio.com/user/-NVyg7gFEEXA-lCYtCVz.json"
    );
    let res = await responce.json();
    // console.log("=====<><>", res);
    if (
      res.email === request.get("email") &&
      res.password === request.get("password")
    ) {
      localStorage.setItem("authToken", "-NVyg7gFEEXA-lCYtCVz");
      return redirect("/adminPannel");
    } else {
      throw new Error("olnly admin login");
    }
  }
};
