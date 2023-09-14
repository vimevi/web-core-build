const showModal = document.querySelector('.header__menu-btn');
const sideBar = document.querySelector('.aside');
const closeModal = document.querySelector('.aside-header__burger-btn');
const blurBackgroundSideBar = document.querySelector('.blurBackgroundSideBar');
const body = document.querySelector('body');
const modal = document.querySelector('.modal-feedback');
const modalCall = document.querySelector('.modal-call');

let isSideBarVisible = false; // Изначально боковая панель скрыта

const closeModalFun = () => {
	sideBar.style.display = 'none';
	blurBackgroundSideBar.style.display = 'none';
	document.body.style.overflowY = 'visible';
	isSideBarVisible = false;
};

const showSideBar = () => {
	sideBar.style.display = 'block';
	sideBar.style.position = 'fixed';
	sideBar.style.zIndex = '13';
	blurBackgroundSideBar.style.display = 'block';
	isSideBarVisible = true;
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
		sideBar.style.display = 'block';
		sideBar.style.position = 'sticky';
		sideBar.style.zIndex = '0';
	} else {
		closeModalFun();
	}
}

window.addEventListener('resize', handleWindowResize);
