import React, { FC, InputHTMLAttributes } from 'react'

import classes from './VerticalLayout.module.css'

interface IVerticalLayout extends InputHTMLAttributes<HTMLDivElement>{}

export const VerticalLayout: FC<IVerticalLayout> = ({ children, ...props }) => {

  const getClearProps = (props: IVerticalLayout) => {
    if (props) {
      let _props = {...props}
      if (_props.className) {
        _props.className = `${classes.layout} ${_props.className}`
      } else {
        _props.className = classes.layout
      }
      return _props
    } else {
      return {}
    }
  }

  console.log('getClearProps', getClearProps(props));
  

  return (
    <div {...getClearProps(props)}>
      { children }
    </div>
  )
}