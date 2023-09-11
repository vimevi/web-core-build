// import './listener-for-second-swiper';
// import './show-modal';
// import './show-side-bar';

// import './swiper-config';

// import '../style/reset.css';
// import '../style/main.css';
// import '../fonts/fonts.css';
// import '../style/brands.css';
// import '../style/aside.css';
// import '../style/devices.css';
// import '../style/prices.css';
// import '../style/footer.css';
// import '../style/modal-call.css';
// import '../style/modal-feedback.css';

const paragraphContainer = document.querySelector('.main__info-wrapper');
const paragraphs = paragraphContainer.querySelectorAll('.main__text');
const showMoreButton = paragraphContainer.querySelector('.more-btn-text');
const spanMoreButton = showMoreButton.querySelector('span');

let isExpandedText = false;
for (let i = 1; i < paragraphs.length; i++) {
	paragraphs[i].style.display = 'none';
}

showMoreButton.addEventListener('click', function () {
	for (let i = 1; i < paragraphs.length; i++) {
		if (!isExpandedText) {
			paragraphs[i].style.display = 'block';
		} else {
			paragraphs[i].style.display = 'none';
		}
	}

	isExpandedText = !isExpandedText;

	if (isExpandedText) {
		spanMoreButton.textContent = 'Скрыть';
	} else {
		spanMoreButton.textContent = 'Показать ещё';
	}
});
showMoreButton.addEventListener('click', function () {
	showMoreButton.classList.toggle('more-btn---rotate');
	console.log('Данная строка выполняется, стрека перевенулась');
});

const moreBtn = document.querySelector('.more-btn');
// const gridLengthswiper1 = document.querySelectorAll('.brands__item').length;
const textMore = moreBtn.querySelector('span');
const btnArrow = moreBtn.querySelector('span::before');

let items = 6;
let isExpanded = false; // Переменная для отслеживания состояния списка

moreBtn.addEventListener('click', () => {
	const array = Array.from(document.querySelector('.brands__items').children);

	if (isExpanded) {
		// Если список был развернут, сворачиваем его
		array.forEach((el) => el.classList.remove('is-visible'));
		textMore.textContent = 'Показать все'; // Обновляем текст кнопки
		// moreBtn.classList.remove('expanded');
		isExpanded = false;
	} else {
		// Если список был свернут, разворачиваем его
		items += 5;
		const visItems = array.slice(0, items);
		visItems.forEach((el) => el.classList.add('is-visible'));
		textMore.textContent = 'Скрыть'; // Обновляем текст кнопки
		// moreBtn.classList.add('expanded');
		isExpanded = true;
	}
});
// Обработчик событий для стрелки в кнопке
moreBtn.addEventListener('click', function () {
	moreBtn.classList.toggle('more-btn---rotate');
});
