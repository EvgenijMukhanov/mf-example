import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import classes from './ModalBody.module.css'

interface IModalBody extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const ModalBody: FC<IModalBody> = ({ children, ...props }) => {

  const getClearProps = (props: IModalBody) => {
    if (props) {
      let _props = {...props}
      if (_props.className) {
        _props.className = `${classes.body} ${_props.className}`
      } else {
        _props.className = classes.body
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