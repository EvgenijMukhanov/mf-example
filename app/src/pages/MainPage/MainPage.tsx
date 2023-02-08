import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import classes from './MainPage.module.css'

interface IMainPage extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const MainPage: FC<IMainPage> = ({ children, ...props }) => {

  const getClearProps = (props: IMainPage) => {
    if (props) {
      let _props = {...props}
      if (_props.className) {
        _props.className = `${classes.page} ${_props.className}`
      } else {
        _props.className = classes.page
      }
      return _props
    } else {
      return {}
    }
  }

  return (
    <div {...getClearProps(props)}>
      { children }MainPage
    </div>
  )
}