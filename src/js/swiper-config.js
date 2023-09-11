import Swiper from 'swiper/bundle';
// import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

window.addEventListener('DOMContentLoaded', () => {
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

	resizableSwiper('(max-width: 768px)', '.swiper', {
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		spaceBetween: 16,
		freeMode: true,
	});
});
