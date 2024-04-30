document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.section2__slider-buttons button');
    const slides = document.querySelectorAll('.slider__content .slide');

    function setItems(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        buttons.forEach(btn => btn.classList.remove('btn-active'));
        
        slides[index].classList.add('active');
        buttons[index].classList.add('btn-active');
    }

    function setPrevSlide() {
        const activeSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
        let nextSlideIndex = activeSlideIndex + 1 < slides.length ? activeSlideIndex + 1 : 0;
        const nextSlide = document.querySelector('.slider__content .slide.prev');
        if (nextSlide) {
            nextSlide.classList.remove('prev');
        }
        slides[nextSlideIndex].classList.add('prev');
    }
		
    buttons.forEach(function (button, i) {
        button.addEventListener('click', function () {
            setItems(i);
            localStorage.setItem('activeButtonIndex', i); 
            localStorage.setItem('activeSlideId', slides[i].id);
            setPrevSlide(i);
        });
    });

    const savedButtonIndex = localStorage.getItem('activeButtonIndex');
    const savedSlideId = localStorage.getItem('activeSlideId');
    if (savedButtonIndex !== null && savedSlideId !== null) {
        setItems(parseInt(savedButtonIndex));
        const savedSlide = document.getElementById(savedSlideId);
        if (savedSlide) {
            savedSlide.classList.add('active');
            setPrevSlide(parseInt(savedButtonIndex));
        }
    } else {
        setItems(0);
  
			}
			setPrevSlide(true);
});
