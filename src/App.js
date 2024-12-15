import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/ALMOSTGOD1999">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/ALMOSTGOD1999">
         Rahul M
        </a>{" "}
      
      </div>
    </React.Fragment>
  );
}

export default App;
