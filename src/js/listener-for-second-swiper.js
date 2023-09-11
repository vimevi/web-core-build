const moreBtnDevices = document.querySelector('.devices .more-btn');
const textMoreDevices = moreBtnDevices.querySelector('span');
const btnArrowDevices = moreBtnDevices.querySelector('span::before');

let itemsDevices = 3;
let isExpandedDevices = false; // Переменная для отслеживания состояния списка

moreBtnDevices.addEventListener('click', () => {
	const array = Array.from(document.querySelector('.devices__items').children);

	if (!isExpandedDevices) {
		itemsDevices += 7; // Изменяем переменную itemsDevices
		const visItems = array.slice(0, itemsDevices);
		visItems.forEach((el) => el.classList.add('is-visible'));
		textMoreDevices.textContent = 'Скрыть';
		isExpandedDevices = true;
	} else {
		// Если список был развернут, сворачиваем его
		array.forEach((el) => el.classList.remove('is-visible'));
		textMoreDevices.textContent = 'Показать все';
		isExpandedDevices = false;
	}
});
// Обработчик событий для стрелки в кнопке
moreBtnDevices.addEventListener('click', function () {
	moreBtnDevices.classList.toggle('more-btn---rotate');
});
