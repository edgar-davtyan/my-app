import React, { useContext } from "react";
import { LoginContext } from "../Provider";

export default function Login() {
  const { loginHandler } = useContext(LoginContext);
  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Email" type="text" />
      <input placeholder="Password" type="password" />
      <button onClick={loginHandler}>Login!</button>
    </div>
  );
}
