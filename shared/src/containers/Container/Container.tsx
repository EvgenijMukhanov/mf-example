import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import classes from './Container.module.css'

interface IContainer extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const Container: FC<IContainer> = ({ children, ...props }) => {

  const getClearProps = (props: IContainer) => {
    if (props) {
      let _props = {...props}
      if (_props.className) {
        _props.className = `${classes.container} ${_props.className}`
      } else {
        _props.className = classes.container
      }
      return _props
    } else {
      return {}
    }
  }

  return (
    <div {...getClearProps(props)}>
      {children}
    </div>
  )
}