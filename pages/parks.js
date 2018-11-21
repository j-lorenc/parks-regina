import React, {Component} from 'react'

import CONFIG from '../config/api'
import styles from './styles.scss'
import './styles.global.scss'

import {withRouter} from 'next/router'

import Anime from 'react-anime';



const HomeView = ({parks}) => {
    
    return (
            <div className={styles.searchContainer}>
                <h1>Jon</h1>
            </div>
    )
}

class Home extends Component {
	
	static getInitialProps  = async () =>{

		return {
			parks:{}
		}
	}
	
	render = () => (React.createElement(HomeView, {
		parks: this.props.parks
	}));
	
}

export default Home
