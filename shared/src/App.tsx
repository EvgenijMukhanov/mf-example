import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./ui";

const App = () => (
  <div className="container">
    <div>Name: shared</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button>Button</Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
