import React, { FC, ReactNode } from 'react'

import classes from './RowField.module.css'

interface IRowField {
  children: ReactNode
}

export const RowField: FC<IRowField> = ({ children }) => {

  return (
    <div className={classes.field}>{ children }</div>
  )
}