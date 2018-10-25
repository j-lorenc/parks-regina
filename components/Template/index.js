import React, {Fragment} from 'react'
import Link from 'next/link'
import Head from '../Head'
import Nav from '../Nav'
import styles from './styles.scss'

export default ({ children }) => (
	<Fragment>
		<Head title="Home" />
		<Nav />
		<div className={styles.container}>
			{children}
		</div>
	</Fragment>
)