import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import classes from './HeaderSidebarLayout.module.css'

interface IHeaderSidebarLayout extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const HeaderSidebarLayout: FC<IHeaderSidebarLayout> = ({ children, ...props }) => {

  const getClearProps = (props: IHeaderSidebarLayout) => {
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