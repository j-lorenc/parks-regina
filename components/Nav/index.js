import React from 'react'
import Link from 'next/link'
import styles from './styles.scss'

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li className={styles.navItem}>
        <Link prefetch href="/">
          <a>Regina Services</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
