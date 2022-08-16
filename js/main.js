
// Init slider
document.addEventListener('DOMContentLoaded', function () {
	const slider = new ChiefSlider('.slider', {
		swipe: true,
		loop: true,
		autoplay: true,
		interval: 4000,
	});
});
// menu-burger
const menuBurger = document.querySelector('.burger-menu');
if (menuBurger) {
	const menuBody = document.querySelector('.menu__body')
	menuBurger.addEventListener("click", function () {
		document.body.classList.toggle('_lock');
		menuBurger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
// Draw stats (percent)
$('.stats__item').each(function (index, element) {
	const value = $(element).children().next().text();
	$(element).children().last().css("width", value);
});

// Function Animation on scroll
function AnimateItems(animWrapper) {
	var animItems;
	if (animWrapper.classList.contains('animation-item')) {
		animItems = animWrapper;
	}
	else {
		animItems = animWrapper.querySelectorAll('.animation-item');
	}
	if (animItems.length > 0) {
		animItems.forEach(animItem => {
			animItem.classList.remove('_active');
			var observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
						return;
					}
					if (entry.isIntersecting) {
						animItem.classList.add('_active');
						return;
					}
					animItem.classList.remove('_active');
				});
			})
			observer.observe(animWrapper);
		});
	}
}

// Animate stats items
const animStatsWrappers = document.querySelectorAll('.stats__item');
if (animStatsWrappers.length > 0) {
	animStatsWrappers.forEach(animStatsWrapper => {
		AnimateItems(animStatsWrapper);
	});
}

// Animate facts items
const animFactsWrappers = document.querySelectorAll('.facts__item');
if (animFactsWrappers.length > 0) {
	animFactsWrappers.forEach(animFactsWrapper => {
		AnimateItems(animFactsWrapper);
	});
}

// Animate blog items
const animBlogWrappers = document.querySelectorAll('.blog__items');
if (animBlogWrappers.length > 0) {
	animBlogWrappers.forEach(animBlogWrapper => {
		AnimateItems(animBlogWrapper);
	});
}

// Animate lets-talk section
const animTalkWrappers = document.querySelectorAll('.lets-talk__content');
if (animTalkWrappers.length > 0) {
	animTalkWrappers.forEach(animTalkWrapper => {
		AnimateItems(animTalkWrapper);
	});
}