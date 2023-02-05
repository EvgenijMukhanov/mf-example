import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import classes from './HorizontalLayout.module.css'

interface IHorizontalLayout extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const HorizontalLayout: FC<IHorizontalLayout> = ({ children, ...props }) => {

  const getClearProps = (props: IHorizontalLayout) => {
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

  return (
    <div {...getClearProps(props)}>
      { children }
    </div>
  )
}