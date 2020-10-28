import React, { useContext } from "react";
import { LoginContext } from "../Provider";

export default function Account() {
  const { loginHandler } = useContext(LoginContext);
  return (
    <div>
      <p>Your Account</p>
      <button onClick={loginHandler}>Log Out!</button>
    </div>
  );
}
