import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import classes from './Sidebar.module.css'

interface ISidebar extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const Sidebar: FC<ISidebar> = ({ children, ...props }) => {

  const getClearProps = (props: ISidebar) => {
    if (props) {
      let _props = {...props}
      if (_props.className) {
        _props.className = `${classes.sidebar} ${_props.className}`
      } else {
        _props.className = classes.sidebar
      }
      return _props
    } else {
      return {}
    }
  }

  return (
    <div {...getClearProps(props)}>
      { children }
    </div>
  )
}