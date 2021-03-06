import React, {Component} from 'react'

import CONFIG from '../config/api'
import styles from './styles.scss'
import './styles.global.scss'

import {withRouter} from 'next/router'

import Anime from 'react-anime';


const HomeView = ({parks}) => {
    return (
            <div className={styles.searchContainer}>

                <div className={styles.searchbarContainer}>
                    <h1>Find A Park Near You</h1>
                    <input className={styles.searchBar} type="text" placeholder={`Search`}/>
                </div>
               
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
