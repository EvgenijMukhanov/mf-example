import React from 'react'

import classes from './Header.module.css'

export const Header = () => {

  return (
    <header className={classes.header}>
      <div className={`${classes.container} container`}>
        <h2 className={classes.logo}>Module federation example</h2>
        <div className={classes.counter}>{`Store counter`}</div>
      </div>
    </header>
  )
}