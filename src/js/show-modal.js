// Находим элементы кнопки и модального окна

const showModalButton = document.querySelector('.showModalFeedback');
const modal = document.querySelector('.modal-feedback');
const closeModalButton = document.querySelector('.modal-feedback__burger');
const closeModalCallButton = document.querySelector('.modal-call__burger');
const body = document.querySelector('body');
const showModalCallButton = document.querySelector('.showModalCall');
const modalCall = document.querySelector('.modal-call');
const blurBackground = document.querySelector('.blurBackgroundModal');
const aside = document.querySelector('.aside');
const html = document.querySelector('.html');

let IsVisibleModal = false;

const showModalFun = () => {
	modal.style.display = 'block';
	// body.style.overflowY = 'hidden';
	blurBackground.style.display = 'block';
	console.log('Выполняется');
	// document.body.style.overflowY = 'hidden';
	IsVisibleModal = true;
	modal.style.position = 'fixed';
};
const hideModalfun = () => {
	modal.style.display = 'none';
	blurBackground.style.display = 'none';
	// body.style.overflowY = 'visible';
	// html.style.overflowY = 'visible';
	IsVisibleModal = false;
};
const showModalCallFun = () => {
	modalCall.style.display = 'block';
	// body.style.overflowY = 'hidden';
	blurBackground.style.display = 'block';
	// document.body.style.overflowY = 'hidden';
	IsVisibleModal = true;
	modalCall.style.position = 'fixed';
};
const hideModalCallfun = () => {
	modalCall.style.display = 'none';
	blurBackground.style.display = 'none';
	// body.style.overflowY = 'visible';
	// html.style.overflowY = 'visible';
	IsVisibleModal = false;
};

// Открываем модальное окно при клике на кнопку
showModalButton.addEventListener('click', function () {
	// if (window.innerWidth <= 1440) {
	// 	aside.style.display = 'none'; // Скрываем aside при ширине экрана <= 1440px
	// }
	showModalFun();
});

window.addEventListener('click', function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
		body.style.overflowY = 'visible';
	}
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
