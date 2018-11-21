import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styles from './styles.scss'
import Logo from './Logo'

import Anime from 'react-anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheat } from '@fortawesome/pro-light-svg-icons'

const Nav = () => (
    <nav className={styles.nav}>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                 <Logo/>
            </li>
        </ul>
    </nav>
)

export default Nav;
