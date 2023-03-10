import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import classes from './VerticalLayout.module.css'

interface IVerticalLayout extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

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

  return (
    <div {...getClearProps(props)}>
      { children }
    </div>
  )
}