document.addEventListener('DOMContentLoaded', function(){
    /* 小塚ゴシック */
    (function(d) {
        var config = {
        kitId: 'vmm1jiv',
        scriptTimeout: 3000,
        async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);

    //ロードアニメーション
    var splash = $('.js-splash');
    var mv_container = $('.js-main-visual__container');
    var mv_title = $('.js-main-visual__title');
    $(window).on('load', function() {
        splash.addClass('is-splash--load-on');
        splash.on('transitionend', function() {
            mv_container.addClass('is-main-visual__container--open');
        });
        mv_container.on('animationend', function() {
            mv_title.addClass('is-main-visual__title--open');
        });
    });

    //Parallx
    function switchByWidth(){
        if(window.matchMedia('(min-width: 600px)').matches) {
            new Parallax('.rellax');
        }
    }
    window.onload = switchByWidth;
    window.onresize = switchByWidth;

    //concept-fade
    var concept_head = $('.js-concept__heading');
    var concept_lead = $('.js-concept__lead');
    var concept_btn = $('.js-concept__btn');
    $(function(){
        $(window).scroll(function (){
            concept_head.each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 300){
                    $(this).addClass('is-concept__heading--open');
                }
                concept_head.on('animationend', function() {
                    concept_lead.addClass('is-concept__lead--open');
                });
                concept_lead.on('animationend', function() {
                    concept_btn.addClass('is-concept__btn--open');
                });
            });
        });
    });
    //menu-fade
    var menu_head = $('.js-menu__heading');
    var menu_message = $('.js-menu__message');
    var menu_list = $('.js-menu__list');
    $(function(){
        $(window).scroll(function (){
            menu_head.each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 400){
                    $(this).addClass('is-menu__heading--open');
                }
                menu_head.on('animationend', function() {
                    menu_message.addClass('is-menu__message--open')
                });
                menu_message.on('animationend', function() {
                    menu_list.addClass('is-menu__list--open')
                });
            });
        });
    });

    //works-fade
    var works_head = $('.js-works__heading');
    var works_list = $('.js-works__list');
    $(function(){
        $(window).scroll(function (){
            works_head.each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 400){
                    $(this).addClass('is-works__heading--open');
                }
                works_head.on('animationend', function() {
                    works_list.addClass('is-works__list--open');
                });
            });
        });
    });

    //inspection-fade
    var inspection = $('.js-inspection');
    $(function(){
        $(window).scroll(function (){
            inspection.each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 450){
                    $(this).addClass('is-inspection--open');
                }
            });
        });
    });

    //heading-fade
    var heading = $('.js-heading');
    $(function(){
        $(window).scroll(function (){
            heading.each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 300){
                    $(this).addClass('is-heading--open');
                }
            });
        });
    });
    new HeroSlider('.swiper-container');
    new Hamburger();
});