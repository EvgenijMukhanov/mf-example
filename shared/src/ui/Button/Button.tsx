import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes, AriaAttributes } from "react";

import classes from './Button.module.css'
export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  AriaAttributes{}

const getClearProps = (props: IButton) => {
  if (props) {
    let _props = {...props}
    if (_props.className) {
      _props.className = `${classes.button} ${_props.className}`
    } else {
      _props.className = classes.button
    }
    return _props
  }else {
    return {}
  }
}

export const Button:FC<IButton> = ({children, ...props}) => {
  return (
    <button {...getClearProps(props)}>{children}</button>
  )
}