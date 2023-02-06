import React, { AriaAttributes, DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { NavLink } from 'react-router-dom'

import classes from './Nav.module.css'

interface INav extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  AriaAttributes{}

export const Nav: FC<INav> = ({ children, ...props }) => {

  const getClearProps = (props: INav) => {
    if (props) {
      let _props = {...props}
      if (_props.className) {
        _props.className = `${classes.sidebar} ${_props.className}`
      } else {
        _props.className = classes.sidebar
      }
      return _props
    } else {
      return {}
    }
  }

  return (
    <nav className={classes.menu}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink to='/' className={({isActive}) => isActive ? `${classes.link} ${classes.active}` : classes.link}>
            Host Page
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to='/resourses' className={({isActive}) => isActive ? `${classes.link} ${classes.active}` : classes.link}>
            MF Page
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}