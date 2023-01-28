import React, {FC, InputHTMLAttributes } from "react";

import classes from './Input.module.css'

const getClearProps = (props) => {
  if (props) {
    let _props = {...props}
    if (_props.className) {
      _props.className = `${classes.input} ${_props.className}`
    } else {
      _props.className = classes.input
    }
    return _props
  }else {
    return {}
  }
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{}

export const Input:FC<IInput> = ({...props}) => {
  return (
    <input {...getClearProps(props)}/>
  )
}