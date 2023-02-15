import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import classes from './ModalDialog.module.css'

interface IModalDialog extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const ModalDialog: FC<IModalDialog> = ({ children, ...props }) => {

  const getClearProps = (props: IModalDialog) => {
    if (props) {
      let _props = {...props}
      if (_props.className) {
        _props.className = `${classes.dialog} ${_props.className}`
      } else {
        _props.className = classes.dialog
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