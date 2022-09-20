import React from "react";
import * as ReactDOM from "react-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Current time : {new Date().toLocaleTimeString()}</h1>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
