import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';

import styles from '../css/styles.css';
import ScreenShots from './components/screenshots';
import Port from './components/port';

class PandaApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shots: ['jsx', 'html', 'php', 'main', 'scss', 'st_css', 'st_html', 'st_js', 'st_jsx'],
			ports: [{
				title: "Visual Studio Code",
				href: "https://marketplace.visualstudio.com/items?itemName=tinkertrain.theme-panda",
				src: "vscode.svg"
			},
			{
				title: "Sublime Text",
				href: "https://packagecontrol.io/packages/Panda Syntax Sublime",
				src: "sublime.svg"
			},
			{
				title: "Atom",
				href: "http://atom.io/themes/atom-panda-syntax",
				src: "atom.svg"
			},
			{
				title: "HyperTerm",
				href: "https://github.com/siamak/hyperterm-panda/",
				src: "hyperterm.svg"
			},
			{
				title: "Terminal (macOS)",
				href: "https://github.com/PandaTheme/panda-terminal",
				src: "terminal.svg"
			},
			{
				title: "iTerm",
				href: "https://github.com/PandaTheme/panda-syntax-iterm",
				src: "iterm.png"
			},
			{
				title: "PyCharm",
				href: "https://github.com/PandaTheme/pycharm-panda-syntax",
				src: "pycharm.png"
			},
			{
				title: "Cmder",
				href: "https://github.com/PandaTheme/Panda-Theme-Cmder",
				src: "cmder.png"
			}]
		};
	}
	render () {
		this.state.ports.sort((a, b) => {
			const titleA = a.title.toUpperCase();
			const titleB = b.title.toUpperCase();
			if (titleA < titleB) {
				return -1;
			}
			if (titleA > titleB) {
				return 1;
			}

			return 0;
		});
		return (
			<section id="siamak-was-here">
				<a href="https://github.com/PandaTheme" className="github-corner">
				<svg width={80} height={80} viewBox="0 0 250 250" style={{fill: '#151513', color: '#fff', position: 'absolute', top: 0, border: 0, right: 0}}>
					<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
					<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin: '130px 106px'}} className="octo-arm" />
					<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body" />
				</svg>
				</a>
				<main className="view">
					<a href="./">
						<img className={styles.logoHatchback} src="./logo.png" alt="Panda Syntax Theme" />
					</a>
					<h1 className="title">
						Panda Syntax Theme
						<i>`A Superminimal, dark Syntax Theme for Editors, IDEs, Terminal.`</i>
						<u>Today +10000 Developers Using Panda.</u>
						{/* <i>`A Superminimal, dark Syntax Theme for <a href='https://github.com/siamak/atom-panda-syntax' target='_blank'>Atom</a>, <a href='https://github.com/siamak/panda-syntax-sublime' target='_blank'>Sublime Text</a>, <a href='https://github.com/tinkertrain/panda-syntax-vscode' target='_blank'>Visual Studio Code</a>, <a href='https://github.com/PandaTheme/panda-syntax-iterm' target='_blank'>iTerm 2</a>, <a href='https://github.com/PandaTheme/pycharm-panda-syntax' target='_blank'>Pycharm</a>.` */}
						{/* </i> */}
						<a className={styles.hero_link} href="https://github.com/PandaTheme">github.com/PandaTheme</a>
					</h1>
					<ScreenShots list={this.state.shots}/>
				</main>
				<section className={styles.leading}>
					<div className="wrapper">
						<h2 className={styles.title}>🐼Panda Available for:</h2>
						{/* <p>
							Go to <code>Setting > Install</code> and choose <code>Themes</code>
							<br/>
							Search for <code>atom-panda-syntax</code> and install it.
							<br/>
							Go to <code>Setting > Themes</code> and choose <code>Atom Panda</code> as the syntax theme.
						</p> */}
						<div className={styles.ports}>
							{
								this.state.ports.map((item, i) => {
									return (
										<Port key={i} href={item.href} src={item.src} title={item.title} />
									);
								})
							}
						</div>
					</div>
				</section>

				<a href="https://github.com/PandaTheme" className={styles.github}>
					<svg className={styles.github_logo} viewBox="0 0 35.318 35.318" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.71,34.689c-0.172,0.062-0.345,0.137-0.522,0.168c-0.678,0.121-1.112-0.229-1.116-0.922
		c-0.009-1.287-0.009-2.572,0.012-3.859c0.022-1.48-0.012-2.941-1.139-4.162c0.67-0.12,1.266-0.204,1.849-0.338
		c3.862-0.887,5.868-3.323,6.124-7.366c0.131-2.058-0.236-3.946-1.604-5.567c-0.099-0.114-0.104-0.373-0.057-0.539
		c0.364-1.34,0.258-2.649-0.166-3.959c-0.105-0.327-0.279-0.428-0.602-0.407c-1.134,0.063-2.173,0.461-3.089,1.073
		c-0.883,0.593-1.705,0.722-2.754,0.482c-2.31-0.521-4.635-0.369-6.94,0.165c-0.261,0.062-0.612-0.021-0.851-0.161
		c-1.082-0.634-2.164-1.25-3.412-1.496c-0.965-0.188-1.049-0.14-1.305,0.793C7.816,9.77,7.784,10.947,8.113,12.13
		c0.047,0.172-0.002,0.448-0.117,0.575c-2.557,2.853-1.631,8.244,0.092,10.309c1.34,1.604,3.12,2.326,5.096,2.701
		c0.345,0.064,0.688,0.113,1.033,0.173c-0.296,0.77-0.562,1.497-0.863,2.212c-0.059,0.138-0.246,0.254-0.399,0.312
		c-1.938,0.752-3.604,0.199-4.713-1.56c-0.593-0.938-1.354-1.639-2.488-1.842c-0.036-0.007-0.073-0.026-0.106-0.021
		c-0.305,0.08-0.607,0.164-0.911,0.246c0.171,0.238,0.292,0.558,0.521,0.701c0.961,0.608,1.586,1.475,1.999,2.498
		c0.649,1.604,1.909,2.319,3.546,2.459c0.799,0.065,1.606,0.01,2.481,0.01c0,0.996,0.036,2.133-0.015,3.265
		c-0.026,0.61-0.639,0.854-1.373,0.604c-1.947-0.666-3.752-1.621-5.311-2.963C0.956,26.96-1.214,20.83,0.657,13.655
		C2.522,6.503,7.383,2.116,14.651,0.739C24.708-1.163,34.235,6.161,35.233,16.37C36.021,24.418,31.284,31.949,23.71,34.689z
		 M14.229,25.85c-0.006,0.014-0.01,0.024-0.016,0.038c0.018,0.003,0.036,0.006,0.055,0.009
		C14.282,25.898,14.294,25.923,14.229,25.85z M9.679,29.031c0.157,0.097,0.307,0.22,0.477,0.273c0.062,0.02,0.177-0.121,0.38-0.271
		c-0.282-0.107-0.448-0.201-0.623-0.225C9.845,28.8,9.757,28.953,9.679,29.031z M11.112,29.277c0.023,0.105,0.232,0.236,0.355,0.234
		c0.119-0.002,0.235-0.16,0.354-0.25c-0.108-0.099-0.216-0.195-0.548-0.494C11.201,28.975,11.082,29.143,11.112,29.277z
		 M12.87,28.854c-0.148,0.035-0.273,0.172-0.408,0.266c0.079,0.1,0.158,0.193,0.285,0.35c0.175-0.16,0.294-0.271,0.414-0.379
		C13.061,29.004,12.944,28.836,12.87,28.854z M8.512,28.261c0.082,0.155,0.209,0.289,0.381,0.508
		c0.115-0.188,0.24-0.332,0.218-0.361c-0.109-0.143-0.257-0.26-0.403-0.367C8.698,28.033,8.495,28.227,8.512,28.261z"/>
					</svg>
					<h1>PandaTheme on github.</h1>
				</a>
			</section>
		);
	}
};

render(
	<PandaApp />,
	document.querySelector('#panda')
)
