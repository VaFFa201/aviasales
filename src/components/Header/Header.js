import React from 'react'

import classes from './Header.module.scss'

function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.header__logo} src="https://cdn.worldvectorlogo.com/logos/aviasales-4.svg" alt="Logo" />
    </header>
  )
}

export default Header
