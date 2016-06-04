import React, { PropTypes, Component } from 'react';

import styles from '../../css/styles.css';

class ScreenShots extends Component {
	render () {
		const random = (min, max) => {
			return Math.round(Math.random() * (max - min) + min);
		};
		let item = this.props.list[random(0, this.props.list.length)];
		item = `./screenshots/${item}.jpg`;
		return (
			<section className={styles.screenShots}>
				<img src={item} id="hero-image" className={styles.view} />
			</section>
		)
	}
};

export default ScreenShots;
