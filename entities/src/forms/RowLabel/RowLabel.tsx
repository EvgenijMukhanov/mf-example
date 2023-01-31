import React, { FC, ReactNode } from 'react'

import classes from './RowLabel.module.css'

interface IRowLabel {
  children: ReactNode
}

export const RowLabel: FC<IRowLabel> = ({ children }) => {

  return (
    <div className={classes.label}>{ children }</div>
  )
}