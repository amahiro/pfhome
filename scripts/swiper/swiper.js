class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            effect: 'fade',
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
            grabCursor: false,
            slidesPerView: 1,
            speed: 1500,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            }
        });
    }
}