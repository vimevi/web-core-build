const showModal = document.querySelector('.header__menu-btn');
const sideBar = document.querySelector('.aside');
const closeModal = document.querySelector('.aside-header__burger-btn');
const blurBackgroundSideBar = document.querySelector('.blurBackgroundSideBar');
const body = document.querySelector('body');
const modal = document.querySelector('.modal-feedback');
const modalCall = document.querySelector('.modal-call');

let isSideBarVisible = false; // Изначально боковая панель скрыта

const showSideBar = () => {
	sideBar.classList.add('aside--visible');
	blurBackgroundSideBar.classList.add('blurBackgroundSideBar--visible');
	isSideBarVisible = true;
};

const closeModalFun = () => {
	sideBar.classList.remove('aside--visible');
	blurBackgroundSideBar.classList.remove('blurBackgroundSideBar--visible');
	isSideBarVisible = false;
};

closeModal.addEventListener('click', function (event) {
	event.preventDefault(); // Предотвращаем стандартное поведение кнопки
	closeModalFun();
});

showModal.addEventListener('click', function (event) {
	event.stopPropagation();
	showSideBar();
});

document.addEventListener('click', function (event) {
	// Проверяем, был ли клик сделан вне боковой панели, modal и modalCall
	const screenWidth = window.innerWidth;
	if (isSideBarVisible && screenWidth <= 1439) {
		if (
			event.target !== sideBar &&
			!sideBar.contains(event.target) &&
			event.target !== modal &&
			!modal.contains(event.target) &&
			event.target !== modalCall &&
			!modalCall.contains(event.target)
		) {
			closeModalFun();
		}
	}
});
// Настройка появления сайдбара при расширении страницы без перезагрузки
function handleWindowResize() {
	const screenWidth = window.innerWidth;

	if (screenWidth >= 1440) {
		sideBar.classList.add('aside--sticky-mode');
	} else {
		sideBar.classList.remove('aside--sticky-mode');
	}
}

window.addEventListener('resize', handleWindowResize);
