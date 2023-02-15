import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import classes from './ModalContent.module.css'

interface IModalContent extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const ModalContent: FC<IModalContent> = ({ children, ...props }) => {

  const getClearProps = (props: IModalContent) => {
    if (props) {
      let _props = {...props}
      if (_props.className) {
        _props.className = `${classes.content} ${_props.className}`
      } else {
        _props.className = classes.content
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