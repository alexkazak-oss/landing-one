window.addEventListener("scroll", function() {
	const scrollBtn = document.getElementById('scrollBtn');
	
    if (window.scrollY > 300) {
        scrollBtn.classList.remove('btn-hidden'); 
    } else {
        scrollBtn.classList.add('btn-hidden');
    }
    scrollBtn.addEventListener('click', function () {
        scrollToTop();
    });

    function scrollToTop() {
        const currentPosition = window.scrollY;
        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 100);
        }
    }

  const scrollBar = document.querySelector('.progress-ring__progress');
	const scrollPosition = window.scrollY;
	const innerSpan = document.getElementById('innerPercentage')
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = Math.round((scrollPosition / documentHeight) * 100);
    const dashoffset = 280 - (scrollPercentage / 100) * 220;
	scrollBar.style.strokeDashoffset = dashoffset;
	innerSpan.innerText = `${scrollPercentage}%`
});
