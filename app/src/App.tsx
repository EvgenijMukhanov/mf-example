import React from "react"
import ReactDOM from "react-dom"

import { Button, Input } from 'shared/ui'
import { Load } from "./hocs";

import './index.css'

const App = () => (
  <Load>
    <div className="container">
      <div>Name: app</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <Button>Remote button</Button>
      <Input />
    </div>
  </Load>
  
);
ReactDOM.render(
    <App />
, document.getElementById("app"));
