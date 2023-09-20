// Находим элементы кнопки и модального окна

const showModalButton = document.querySelector('.showModalFeedback');
const showModalButtons = document.querySelectorAll('.showModalFeedback');
const showModalCallButton = document.querySelector('.showModalCall');
const showModalCallButtons = document.querySelectorAll('.showModalCall');

const modal = document.querySelector('.modal-feedback');
const closeModalButton = document.querySelector('.modal-feedback__burger');
const closeModalCallButton = document.querySelector('.modal-call__burger');
const body = document.querySelector('body');
const modalCall = document.querySelector('.modal-call');
const blurBackground = document.querySelector('.blurBackgroundModal');
const aside = document.querySelector('.aside');
const html = document.querySelector('.html');

let IsVisibleModal = false;

const showModalFun = () => {
	modal.classList.add('modal-feedback--visible');
	blurBackground.classList.add('blurBackground--visible');
	console.log('Выполняется');
	IsVisibleModal = true;
};
const hideModalfun = () => {
	modal.classList.remove('modal-feedback--visible');
	blurBackground.classList.remove('blurBackground--visible');
	IsVisibleModal = false;
};
const showModalCallFun = () => {
	modalCall.classList.add('modal-call--visible');
	blurBackground.classList.add('blurBackground--visible');
	IsVisibleModal = true;
};
const hideModalCallfun = () => {
	modalCall.classList.remove('modal-call--visible');
	blurBackground.classList.remove('blurBackground--visible');
	IsVisibleModal = false;
};

// Открываем модальное окно при клике на кнопку
showModalButton.addEventListener('click', function () {
	showModalFun();
});

showModalButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.stopPropagation();
		showModalFun();
	});
});

showModalCallButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.stopPropagation();
		showModalCallFun();
	});
});

closeModalCallButton.addEventListener('click', function (event) {
	event.preventDefault(); // Предотвращаем стандартное поведение кнопки
	hideModalCallfun();
	// добавить сюда функцию
});
closeModalButton.addEventListener('click', function (event) {
	event.preventDefault(); // Предотвращаем стандартное поведение кнопки
	hideModalfun();
	// добавить сюда функцию
});
// Открываем модальное окно при клике на кнопку
showModalCallButton.addEventListener('click', function () {
	showModalCallFun();
});
showModalButton.addEventListener('click', function (event) {
	event.stopPropagation();
	showModalFun();
});
showModalCallButton.addEventListener('click', function (event) {
	event.stopPropagation();
	showModalCallFun();
});
// Закрытие по клику вне зоны контейнера

document.addEventListener('click', function (event) {
	if (IsVisibleModal) {
		if (event.target !== modalCall && !modalCall.contains(event.target)) {
			hideModalCallfun();
		}

		if (event.target !== modal && !modal.contains(event.target)) {
			hideModalfun();
		}
	}
});

modal.addEventListener('click', function (event) {
	if (
		event.target.tagName === 'INPUT' ||
		event.target.tagName === 'FORM' ||
		event.target.tagName === 'TEXTAREA' ||
		event.target.tagName === 'A'
	) {
		event.stopPropagation(); // Остановить всплытие события, чтобы оно не достигло document
	}
});
modalCall.addEventListener('click', function (event) {
	if (
		event.target.tagName === 'INPUT' ||
		event.target.tagName === 'FORM' ||
		event.target.tagName === 'A'
	) {
		event.stopPropagation(); // Остановить всплытие события, чтобы оно не достигло document
	}
});
