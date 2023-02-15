import React from "react";
import ReactDOM from "react-dom";
import { Button, Input, Text } from "./ui";
import { Container } from './containers/index'

import './index.css'
import './styles/variable.css'
import { Modal } from "./modals/Modal/Modal";

const App = () => (
  <Container>
    <Button>Button</Button>
    <Input/>
    <Text title="Text">Text</Text>
    <Modal></Modal>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
