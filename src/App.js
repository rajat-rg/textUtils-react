import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [color, setColor] = useState("white");
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#06081c";
      setColor("#06081c");
      // showAlert("Enabeled dark mode", "success");
    } else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Enabeled light mode", "success");
      setColor("white");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const red = () => {
    document.body.style.backgroundColor = "#520000";
    setColor("#520000");
    setMode("danger");
  };
  const green = () => {
    document.body.style.backgroundColor = "#031a01";

    setColor("#031a01");
    setMode("success");
  };
  const blue = () => {
    document.body.style.backgroundColor = "#051836";

    setColor("#051836");
    setMode("info");
  };
  const yellow = () => {
    document.body.style.backgroundColor = "#524800";

    setColor("#524800");
    setMode("warning");
  };

  const changeTheme = { red: red, green: green, blue: blue, yellow: yellow };
  return (
    <>
    <Router>
      <div className="App">
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
          changeTheme={changeTheme}
        />
      </div>
      <Alert alert={alert} />
      <Switch>
          <Route path="/about">
            <About heading="About Us" mode={mode} color={color} />
          </Route>
          <Route path="/">
              <TextArea
            heading="Enter your text here"
            mode={mode}
            showAlert={showAlert}
            color={color}
          />
          </Route>
        </Switch>
      
      </Router>
    </>
  );
}

export default App;
