const showModal = document.querySelector('.header__menu-btn');
const sideBar = document.querySelector('.aside');
const closeModal = document.querySelector('.aside-header__burger-btn');
const blurBackgroundSideBar = document.getElementById('blurBackgroundSideBar');

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
	sideBar.style.zIndex = '14';
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

document.body.addEventListener('click', function (event) {
	// Проверяем, был ли клик сделан вне боковой панели
	const screenWidth = window.innerWidth;
	if (isSideBarVisible && screenWidth <= 1439) {
		if (event.target !== sideBar && !sideBar.contains(event.target)) {
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
