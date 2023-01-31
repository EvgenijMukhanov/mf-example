import React from "react";
import ReactDOM from "react-dom";

import './shared-decl.d'
import "./index.css";
import { RowInfo } from "./forms";

const App = () => (
  <div className="container">
    <div>Name: entities</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <RowInfo
      label='Заголовок'
      value='Значение'
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
