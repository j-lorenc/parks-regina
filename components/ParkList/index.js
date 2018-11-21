import React, {Component, Fragment} from 'react';
import fetch from 'isomorphic-unfetch';
import Case from 'case';
import {NameCase} from '../../helpers/StringUtils'
import styles from "./styles.scss"

const ParkListView = ({parks}) => {
	return (
		<div>
			<h1>Test</h1>
			{parks.map((park, idx)=>( <ParkView key={ idx} {...park}/>))}
		</div>
	)
}

const ParkView = ({address, name, type,amenities}) => (
	<div className={styles.container}>
		<div>
			<h2 className={styles.header}>{name}</h2>
		</div>
		<div>{type}</div>
		<div>{address && `${address}` }</div>
		<div>{amenities && `${amenities}` }</div>
	</div>
)


class ParkList extends Component {

	render = () => (React.createElement(ParkListView, {
		parks: this.props.rawParkData
	}));

}


export default ParkList;
