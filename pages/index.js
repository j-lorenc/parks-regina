import React, {Component} from 'react'
import Link from 'next/link'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Template from '../components/Template'
import CONFIG from '../config/api'
import fetch from 'isomorphic-unfetch'

const HomeView = ({parks}) => (
  <Template>
		<h1>Test</h1>
		{parks.map(({address, name}, idx)=>(
			<div key={idx}>
				<div>{address && `${address} -` }{name}</div>
				<div></div>
			</div>
		))}
  </Template>
)



class Home extends Component {
	
	static getInitialProps  = async () =>{
		const res = await fetch(CONFIG.APIS.PARKS)
		const data = await res.json()
		
		let parks = data.features.reduce((acc, park)=>{
			
			acc[park.attributes.OBJECTID] = {
				id: park.attributes.OBJECTID,
				name: park.attributes.NAME,
				address: park.attributes.ADDRESS
			}
			
			return acc;
		}, {});
		
		parks = Object.keys(parks).map((id)=>{
			return {
				...parks[id]
			}
		})

		return {
			parks
		}
	}
	
	render = () => (React.createElement(HomeView, {
		parks: this.props.parks
	}));
	
}

export default Home
