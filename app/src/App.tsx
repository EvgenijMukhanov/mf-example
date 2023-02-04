import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'

import { Button, Input } from 'shared/ui'
import { VerticalLayout } from 'shared/layouts'
import { Header } from 'entities/layouts'
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
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById("app"));
