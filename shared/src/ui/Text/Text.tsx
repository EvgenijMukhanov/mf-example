import React, { FC, HTMLAttributes } from "react";

import classes from './Text.module.css'

export interface IText extends HTMLAttributes<HTMLSpanElement> {}

const getClearProps = (props: IText) => {
  if (props) {
    let _props = {...props}
    if (_props.className) {
      _props.className = `${classes.text} ${_props.className}`
    } else {
      _props.className = classes.text
    }
    return _props
  } else {
    return {}
  }
}

export const Text:FC<IText> = ({ children, ...props }) => {
  return (
    <span {...getClearProps(props)}>{ children }</span>
  )
}