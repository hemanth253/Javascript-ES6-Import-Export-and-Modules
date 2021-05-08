// 20% of user's browser does not support es6 which fails to render code through import/export where as the require function which comes from nodemodules is preferable as an alternative if required.
import React from "react";
import ReactDOM from "react-dom";

//  Even below one works
// import pie, { doublePi, triplePi } from "./math";
// {pie} --> works
import * as pi from "./math"; // but this is dicouraged because its good to import what we require.

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
