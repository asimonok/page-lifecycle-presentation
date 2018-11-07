import React from 'react'
import { Mail, Phone } from '@material-ui/icons'
import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.root}>
    <ul className={styles.contacts}>
      <li><a href='/'><Mail /> info@softeq.com</a></li>
      <li><a href='/'><Phone /> +375(44) 123-45-67</a></li>
    </ul>
    <p className={styles.copyright}>2018 Copyright</p>
  </footer>
)

export default Footer
