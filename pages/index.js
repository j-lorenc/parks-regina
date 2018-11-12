import React, {Component} from 'react'
import Template from '../components/Template'
import ParkList from '../components/ParkList'
import CONFIG from '../config/api'

const HomeView = ({parks}) => (
  <Template>
		<ParkList rawParkData={parks}/>
  </Template>
)

class Home extends Component {
	
	static getInitialProps  = async () =>{
		const res = await fetch(CONFIG.APIS.PARKS)
		const parks = await res.json();

		return {
			parks
		}
	}
	
	render = () => (React.createElement(HomeView, {
		parks: this.props.parks
	}));
	
}

export default Home
