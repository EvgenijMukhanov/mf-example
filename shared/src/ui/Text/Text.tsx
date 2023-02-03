import React, { AriaAttributes, DetailedHTMLProps, FC, HTMLAttributes, InputHTMLAttributes } from "react";

import classes from './Text.module.css'

interface IText extends DetailedHTMLProps<InputHTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  AriaAttributes{}

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