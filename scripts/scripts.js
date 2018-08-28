$(document).ready(function() {
	
    $(".reviews__text").dotdotdot();

    $('#fullpage').fullpage({
       menu: '#myMenu'
    });

    $('.slider__list').slick();
    
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
         center: [56.8410156705631,53.21143717499916],
         zoom: 12
     }, {
         searchControlProvider: 'yandex#search'
     }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        	'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        	),

        place = new ymaps.Placemark(myMap.getCenter(), {
        	hintContent: 'Рады ждать',
        	balloonContent: 'Рады ждать'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/marker.svg',
            iconImageSize: [48, 48],
            iconImageOffset: [-5, -38]
        }),

        place2 = new ymaps.Placemark([56.85712915894517,53.21193904178206], {
        	hintContent: 'Рады ждать',
        	balloonContent: 'Рады ждать'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/icons/marker.svg',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentLayout: MyIconContentLayout
        });

        place3 = new ymaps.Placemark([56.866589258949716,53.27314142826776], {
        	hintContent: 'Рады ждать',
        	balloonContent: 'Рады ждать'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/icons/marker.svg',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentLayout: MyIconContentLayout
        });

        place4 = new ymaps.Placemark([56.89952202898521,53.14206777623148], {
        	hintContent: 'Рады ждать',
        	balloonContent: 'Рады ждать'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/icons/marker.svg',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentLayout: MyIconContentLayout
        });

        myMap.geoObjects
        .add(place)
        .add(place2)
        .add(place3)
        .add(place4)
        myMap.behaviors.disable('scrollZoom');
    });

    var navMobileBtnOpen = document.querySelector("#btn-nav-mobile__btn");
    var navMobileBtnClose = document.querySelector("#nav-mobile__close");
    var navMobile = document.querySelector(".nav-mobile");
    var navMobileBtnlink = document.querySelectorAll(".nav-mobile__link");

    navMobileBtnOpen.addEventListener('click', function () {
        event.preventDefault();
        navMobile.classList.add('nav-mobile_active');
    });
    navMobileBtnClose.addEventListener('click', function () {
        event.preventDefault();
        navMobile.classList.remove('nav-mobile_active');
    }); 
    for (let i = 0; i < navMobileBtnlink.length; i++) {
        navMobileBtnlink[i].addEventListener("click", function(e) {
            navMobile.classList.remove('nav-mobile_active');
        });
    };

    function openPopup(e) {
        e.preventDefault();
        $('.reviews-popups').toggleClass('reviews-popups_active');
    };
    
    $('.reviews__list .btn').on('click', openPopup);
    $('.reviews-popups__close').on('click', openPopup);
    var teamName = document.querySelectorAll(".team__btn");
    var teamItem = document.querySelectorAll(".team__elem");
    for (let i = 0; i < teamName.length; i++) {
        teamName[i].addEventListener("click", function(e) {
            e.preventDefault();
            for (let j = 0; j < teamItem.length; j++) {
                if (j !== i) {
                    teamItem[j].classList.remove("team__elem_active");
                };
            };
            this.closest('.team__elem').classList.toggle("team__elem_active");
        });
    }; 

    var accordionLink = document.querySelectorAll(".accordion-menu__link");
    var accordionElem = document.querySelectorAll(".accordion-menu__elem");
    var accordionList = document.querySelector(".accordion-menu__list");
    var accordionListClose = document.querySelectorAll(".accordion-menu__drop-close");
    for (let i = 0; i < accordionLink.length; i++) {
        accordionLink[i].addEventListener("click", function(e) {
            e.preventDefault();
            for (let j = 0; j < accordionElem.length; j++) {
                if (j !== i) {
                    accordionElem[j].classList.remove("accordion-menu__elem_active");
                };
            };
            this.closest('.accordion-menu__elem').classList.toggle("accordion-menu__elem_active");
            this.closest('.accordion-menu__list').classList.toggle("accordion-menu__list_active");
        });
    }; 
    for (let i = 0; i < accordionListClose.length; i++) {
        accordionListClose[i].addEventListener("click", function(e) {
            e.preventDefault();
            for (let j = 0; j < accordionElem.length; j++) {
                accordionElem[j].classList.remove("accordion-menu__elem_active");
            };            
            this.closest('.accordion-menu__list').classList.remove("accordion-menu__list_active");
        });
    };
});