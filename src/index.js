// js imports
import './js/main';
import './js/listener-for-second-swiper';
import './js/show-modal';
import './js/show-side-bar';
import './js/swiper-config';

// css imports
import './style/reset.css';
import './style/main-1.css';
// import './scss/devices.scss';
import './fonts/fonts.css';
import './style/brands.css';
import './style/aside.css';
import './scss/devices.css';
import './scss/prices.css';
import './scss/footer.css';
import './scss/modal-feedback.css';

const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
	let swiper;

	breakpoint = window.matchMedia(breakpoint);

	const enableSwiper = function (className, settings) {
		swiper = new Swiper(className, settings);
	};

	const checker = function () {
		if (breakpoint.matches) {
			return enableSwiper(swiperClass, swiperSettings);
		}
		if (swiper !== undefined) swiper.destroy(true, true);
		return;
	};

	breakpoint.addEventListener('change', checker);
	checker();
};
