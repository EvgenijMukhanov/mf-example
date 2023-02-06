import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'

import { Button, Input } from 'shared/ui'
import { VerticalLayout, HorizontalLayout } from 'shared/layouts'
import { Header } from 'entities/layouts'
import { Load } from "./hocs";

import './index.css'
import { Nav, Sidebar } from "./widgets"

const App = () => (
  <Load>
    <VerticalLayout style={{height: '100vh'}}>
      <Header />
      <HorizontalLayout style={{flexGrow: '1'}}>
        <Sidebar>
          <Nav />
        </Sidebar>
        <div style={{flexGrow: '1'}}>
          Content
        </div>
      </HorizontalLayout>
      
    </VerticalLayout>
  </Load>
  
);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById("app"));
