import React from "react";
import ReactDOM from "react-dom";

import { Button } from 'shared/ui'

const App = () => (
  <div className="container">
    <div>Name: app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button>Remote button</Button>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
