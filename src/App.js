import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [xd, setXd] = useState(2);

  for (let i = 0; i < xd; i--) {
    console.log("XD");
  }

  return <div className="App">Thanks for your ip 😊</div>;
}

export default App;
