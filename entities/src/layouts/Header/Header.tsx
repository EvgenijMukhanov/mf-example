import React from 'react'

import { Container } from 'shared/containers'

import classes from './Header.module.css'

export const Header = () => {

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <h2 className={classes.logo}>Module federation example</h2>
        <div className={classes.counter}>{`Store counter`}</div>
      </Container>
    </header>
  )
}