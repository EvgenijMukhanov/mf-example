import React from "react";
import ReactDOM from "react-dom";

import { RowInfo } from "./forms";

import './shared-decl.d'

import './styles/variable.css'
import "./index.css";

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
