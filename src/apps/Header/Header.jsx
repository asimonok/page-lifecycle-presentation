import React from 'react'
import { Button } from 'reactstrap'
import { Menu } from '@material-ui/icons'
import logo from './logo.svg'
import styles from './Header.module.css'

const Header = () => (
  <header className={styles.root}>
    <a href='/' className={styles.logo}>
      <img src={logo} width={64} height={64} alt='' /> NNews
    </a>
    <Button className={styles.menu} color='link'>
      <Menu fontSize='large' />
    </Button>
  </header>
)

export default Header
