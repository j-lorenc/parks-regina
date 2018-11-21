import React from 'react'
import Link from 'next/link'

import Anime from 'react-anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheat } from '@fortawesome/pro-light-svg-icons'
import styles from './styles.scss'
 
const Logo = () => (
    <Link prefetch href="/parks">
        <a>
            <div className={styles.logo}>
                <div className={styles.logoPic}>
                    <FontAwesomeIcon className={`headerLogoIcon`} size={"1x"} icon={faWheat}/>
                    <h1>R</h1>
                </div>
                <div>
                    <span><h2>REGINA</h2><h3>Services</h3></span>
                </div>
            </div>
        </a>
    </Link>  
);

export default Logo;