import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import classes from './ModalFooter.module.css'

interface IModalFooter extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const ModalFooter: FC<IModalFooter> = ({ children, ...props }) => {

  const getClearProps = (props: IModalFooter) => {
    if (props) {
      let _props = {...props}
      if (_props.className) {
        _props.className = `${classes.foolter} ${_props.className}`
      } else {
        _props.className = classes.foolter
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