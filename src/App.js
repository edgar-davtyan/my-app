import React, { useContext } from "react";
import Account from "./Account";
import Login from "./Login";
import { LoginContext } from "./Provider";
import "./App.css";

function App() {
  const { visible } = useContext(LoginContext);
  
  return <div className="Container">{visible ? <Login /> : <Account />}</div>;
}

export default App;
