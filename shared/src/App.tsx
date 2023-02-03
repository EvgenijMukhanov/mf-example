import React from "react";
import ReactDOM from "react-dom";
import { Button, Input, Text } from "./ui";
import { Container } from './containers/index'

import './index.css'
import './styles/variable.css'

const App = () => (
  <Container>
    <Button>Button</Button>
    <Input/>
    <Text title="Text">Text</Text>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
