import React from "react";
import ReactDOM from "react-dom";

/*
JSX RULES
-return single element
-div / section / article or fragment
-use camelCase for html attribute
-className instead of class
-close every element
*/

function Greeting() {
  return (
    <div>
      <h2>John doe</h2>
      <p>This is my message</p>
    </div>
  );
}

/*const Greeting = () => {
  return React.createElement("h1", {}, "hello world");
};*/

ReactDOM.render(<Greeting />, document.getElementById("root"));
