import React, { PropTypes, Component } from 'react';

import styles from '../../css/styles.css';

class Port extends Component {
	render () {
		return (
			<a href={this.props.href} target="_blank">
				<div className={styles.box}>
					<img src={`icons/${this.props.src}`} className={styles.icon}/>
					<h4>{this.props.title}</h4>
				</div>
			</a>
		)
	}
};

export default Port;
