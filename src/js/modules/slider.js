import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay, Parallax} from 'swiper/modules';

const progressCircle = document.querySelector('.autoplay-progress svg');
const progressContent = document.querySelector('.autoplay-progress span');
let bannerSlider;
let loop = false;
let autoplay = {
	enabled: false,
	disableOnInteraction: false,
};
let videoPrev = null;
let videoActive = null;

if (progressCircle) {
	progressCircle.closest('.autoplay-progress').style.display = 'none';
}

const initSlider = () => {
	bannerSlider = new Swiper('.banner-slider', {
		modules: [Navigation, Pagination, Autoplay, Parallax],
		loop,
		speed: 2400,
		parallax: {
			enabled: true,
		},
		autoplay,
		pagination: {
			el: '.banner-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.banner-button-next',
			prevEl: '.banner-button-prev',
		},
		on: {
			autoplayTimeLeft(s, time, progress) {
				progressCircle.style.setProperty('--progress', 1 - progress);
				progressContent.textContent = `${Math.ceil(time / 1000)}с.`;
			},
			slideChange(s) {
				const prevIdx = this.activeIndex - 1 < 0 ? 0 : this.activeIndex - 1;
				videoPrev = this.slides[prevIdx].querySelector('video');
				if (videoPrev) {
					videoPrev.pause();
				}
				videoActive = this.slides[this.activeIndex].querySelector('video');
				if (videoActive) {
					this.params.autoplay.delay = Math.ceil(videoActive.duration) * 1000;
				}
				progressCircle.closest('.autoplay-progress').style.display = 'none';
			},
			slideChangeTransitionEnd(s) {
				if (videoPrev) {
					videoPrev.currentTime = 0;
				}
				if (videoActive) {
					videoActive.play();
				}
				progressCircle.closest('.autoplay-progress').style.display = 'flex';
			},
		},
	});
};

const slides = document.querySelectorAll('.banner-slide');

if (slides.length > 1) {
	loop = true;
	autoplay.enabled = true;
	progressCircle.closest('.autoplay-progress').style.display = 'flex';
}

initSlider();

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

async function initImagesSlider(url, selector, slider){
	await fetch(url)
	.then((res) => res.json())
	.then((data) => {
		const allImages = [].concat(...Object.values(data));
		allImages.map((image) => {
			document.querySelector(selector).insertAdjacentHTML(
				'beforeend',
				`<a href="${image}" class="swiper-slide glightbox image-slide" data-gallery="${slider.replace('.', '')}">
					<img src="${image}" loading="lazy" />
					<div class="swiper-lazy-preloader"></div>
				</a>
			`
			);
		});
		new Swiper(slider, {
			modules: [Autoplay],
			loop: true,
			centeredSlides: true,
			speed: 500,
			autoplay: {
				enabled: true,
				delay: 3000,
			},
			breakpoints: {
				320: {
					slidesPerView: 3.5,
					spaceBetween: 5,
				},
				640: {
					slidesPerView: 5.5,
					spaceBetween: 10,
				},
				1280: {
					slidesPerView: 8.5,
					spaceBetween: 10,
				}
			}
		});
		GLightbox({
			loop: true
		});
	});
}

await initImagesSlider('/data/u5plus.json', '.u5plus-slider .swiper-wrapper', '.u5plus-slider')
await initImagesSlider('/data/x35.json', '.x35-slider .swiper-wrapper', '.x35-slider')
