import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';

import styles from '../css/styles.css';
import ScreenShots from './components/screenshots';

class PandaApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shots: ['jsx', 'jade', 'php', 'main', 'scss']
		};
	}
	render () {
		return (
			<section id="siamak-was-here">
				<main className="view">
					<a href="./">
						<img className={styles.logoHatchback} src="./logo.png" alt="Panda Syntax Theme" />
					</a>
					<h1 className="title">
						Panda Syntax Theme
						<i>`A Superminimal, dark Syntax Theme for atom.`</i>
						<a href="https://github.com/siamak/atom-panda-syntax">github.com/siamak/atom-panda-syntax</a>
					</h1>
					<ScreenShots list={this.state.shots}/>
				</main>
				<section className={styles.leading}>
					<div className="wrapper">
						<h2 className={styles.title}>Installation</h2>
						<p>
							Go to <code>Setting > Install</code> and choose <code>Themes</code>
							<br/>
							Search for <code>atom-panda-syntax</code> and install it.
							<br/>
							Go to <code>Setting > Themes</code> and choose <code>Atom Panda</code> as the syntax theme.
						</p>
					</div>
				</section>

				<a href="https://github.com/siamak/atom-panda-syntax" className={styles.github}>
					<h1>Available on Github.</h1>
				</a>
			</section>
		);
	}
};

render(
	<PandaApp />,
	document.querySelector('#panda')
)
