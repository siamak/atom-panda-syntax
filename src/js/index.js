'use strict';

(function fetch_screen() {
	const $el = document.querySelector('#hero-image');
	const random = (min, max) => {
		return Math.round(Math.random() * (max - min) + min);
	};
	const data = ['main', 'jsx', 'jade', 'php', 'scss'];
	const selectImg = random(0, 4);
	$el.setAttribute("src", `screenshots/${data[selectImg]}.jpg`);
})();
