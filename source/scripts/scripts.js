

$(document).ready(function() {
	
    $(".reviews__text").dotdotdot({

    });

    $('#fullpage').fullpage({
        anchors: ['section_burger', 'section_advantages', 'section_reviews', 'section_slider', 'section_team', 'section_menu', 'section_order', 'section_map'],
        menu: '#myMenu'
    });
    

    // карта 
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
         center: [51.52425877689033,46.04030515534218],
         zoom: 9
     }, {
         searchControlProvider: 'yandex#search'
     }),



        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        	'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        	),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        	hintContent: 'Мы тут',
        	balloonContent: 'Мы тут'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemark2 = new ymaps.Placemark([51.42425877689033,46.24030515534218], {
        	hintContent: 'Мы тут',
        	balloonContent: 'Мы тут'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myPlacemark3 = new ymaps.Placemark([51.62425877689033,46.14030515534218], {
        	hintContent: 'Мы тут',
        	balloonContent: 'Мы тут'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark2)
        .add(myPlacemark3);

        myMap.behaviors.disable('scrollZoom');
    });


    // мобильное меню

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



    // аккордеон команда
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

    // аккордеон меню
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