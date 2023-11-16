var swiper = new Swiper(".swiperGeneral", {
    slidesPerView: 1,
    spaceBetween: 420,
    grabCursor: false,
    speed: 800,
    loop: true,
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
});


var swiper = new Swiper(".swiperCard", {
    slidesPerView: 1,
    spaceBetween: 420,
    grabCursor: false,
    speed: 800,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});

window.onload = function() {
    var enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            var seccionID = this.getAttribute('href').substring(1);
            var seccion = document.getElementById(seccionID);
            var seccionRect = seccion.getBoundingClientRect();

            var posicionCentro = (window.innerHeight / 2) - (seccionRect.height / 2);
            var posicionFinal = seccionRect.top + window.scrollY - posicionCentro;

            window.scrollTo({
                top: posicionFinal,
                behavior: 'smooth'
            });
        });
    });
};
