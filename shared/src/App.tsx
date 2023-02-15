import React from "react";
import ReactDOM from "react-dom";
import { Button, Input, Text } from "./ui";
import { Container } from './containers/index'
import { Modal, ModalContent, ModalDialog } from './modals';

import './index.css'
import './styles/variable.css'

const App = () => (
  <Container>
    <Button>Button</Button>
    <Input/>
    <Text title="Text">Text</Text>
    <Modal>
      <ModalDialog>
        <ModalContent>
          
        </ModalContent>
      </ModalDialog>
    </Modal>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
