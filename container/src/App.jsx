// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.css";

// const App = () => (
//   <div className="container">
//     <div>Name: container</div>
//     <div>Framework: react</div>
//     <div>Language: JavaScript</div>
//     <div>CSS: Empty CSS</div>
//   </div>
// );
// ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'counter/Counter';
import "./index.css";
const App = () => (
  <div className="container">
    <h1>Container App</h1>
    <Counter /> // Micro frontend app
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
