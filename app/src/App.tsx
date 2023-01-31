import React from "react";
import ReactDOM from "react-dom";

import './shared-decl.d'

import { Button, Input } from 'shared/ui'
import { Component } from './Component'

import './index.css'

const App = () => (
  <div className="container">
    <div>Name: app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button>Remote button</Button>
    <Input />
    <Component />
  </div>
);
ReactDOM.render(
    <App />
, document.getElementById("app"));
