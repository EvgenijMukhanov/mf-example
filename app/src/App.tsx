import React from "react"
import ReactDOM from "react-dom"

import { Button, Input } from 'shared/ui'
import { VerticalLayout } from 'shared/layout'
import { Header } from 'entities/layout'
import { Load } from "./hocs";

import './index.css'

const App = () => (
  <Load>
    <VerticalLayout style={{height: '100vh'}}>
      <Header />
      <div style={{flexGrow: '1'}}>
        <Button>Remote button</Button>
        <Input />
      </div>
      
    </VerticalLayout>
  </Load>
  
);
ReactDOM.render(
    <App />
, document.getElementById("app"));
