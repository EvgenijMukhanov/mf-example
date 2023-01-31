import React, { FC, ReactNode } from 'react'

import classes from './Row.module.css'

interface IRow {
  children: ReactNode
}

export const Row:FC<IRow> = ({ children }) => {
  return (
    <div className={classes.row}>{ children }</div>
  )
}