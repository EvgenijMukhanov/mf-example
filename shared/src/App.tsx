import React from "react";
import ReactDOM from "react-dom";
import { Button, Input, Text } from "./ui";

import './index.css'
import './styles/variable.css'

const App = () => (
  <div className="container" style={{width: '70%'}}>
    <div>Name: shared</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button>Button</Button>
    <Input />
    <Text>Text</Text>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
