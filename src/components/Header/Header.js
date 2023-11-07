import React from 'react'

import logo from '../../assets/images/Aviasales.svg'

import classes from './Header.module.scss'

function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.header__logo} src={logo} alt="Logo" />
    </header>
  )
}

export default Header
