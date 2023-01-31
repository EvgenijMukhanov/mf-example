import React, { FC, HTMLAttributes, ReactNode } from "react";

import classes from './Text.module.css'

export interface IText extends HTMLAttributes<HTMLParagraphElement> {}

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
    <p {...getClearProps(props)}>{ children }</p>
  )
}