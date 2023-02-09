import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import classes from './Modal.module.css'

interface IModal extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const Modal: FC<IModal> = ({ children, ...props }) => {

  const getClearProps = (props: IModal) => {
    if (props) {
      let _props = {...props}
      if (_props.className) {
        _props.className = `${classes.modal} ${_props.className}`
      } else {
        _props.className = classes.modal
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