import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import classes from './ModalHeader.module.css'

interface IModalHeader extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const ModalHeader: FC<IModalHeader> = ({ children, ...props }) => {

  const getClearProps = (props: IModalHeader) => {
    if (props) {
      let _props = {...props}
      if (_props.className) {
        _props.className = `${classes.header} ${_props.className}`
      } else {
        _props.className = classes.header
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