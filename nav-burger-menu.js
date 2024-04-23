document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.getElementById('menu-toggle');
	const menu = document.querySelector('.header__menu.menu__mob');

	menuToggle.addEventListener('click', function() {
		document.body.classList.toggle('nav-open');
		menu.classList.toggle('menu__mob-visible');
	});
});
