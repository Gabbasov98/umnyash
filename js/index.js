function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },

        }
    })
}

function sliderNew() {
    var swiper = new Swiper('.new .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.new .swiper-button-next',
            prevEl: '.new .swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 2
            },
            500: {
                slidesPerView: 3,
                spaceBetween: 2
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 9
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 9
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 9
            },
        }
    })
}



function sliderHit() {
    var swiper = new Swiper('.hit .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.hit .swiper-button-next',
            prevEl: '.hit .swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 2
            },
            500: {
                slidesPerView: 3,
                spaceBetween: 2
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 9
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 9
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 9
            },
        }
    })
}

function sliderRec() {
    var swiper = new Swiper('.rec .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.rec .swiper-button-next',
            prevEl: '.rec .swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 2
            },
            500: {
                slidesPerView: 3,
                spaceBetween: 2
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 9
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 9
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 9
            },
        }
    })
}

function sliderBrands() {
    var swiper = new Swiper('.brand .swiper-container', {
        slidesPerView: 7,
        spaceBetween: 16,
        navigation: {
            nextEl: '.brand .swiper-button-next',
            prevEl: '.brand .swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 4
            },
            480: {
                slidesPerView: 4,
                spaceBetween: 4
            },
            576: {
                slidesPerView: 5,
                spaceBetween: 4
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 5
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 10
            },
            1200: {
                slidesPerView: 7,
                spaceBetween: 16
            },
        }
    })
}


$(document).ready(function() {
    sliderMain()
    sliderNew()
    sliderHit()
    sliderRec()
    sliderBrands()

    // Меню каталога в шапке
    $(".header__catalog-btn").click(function() {
        $(this).toggleClass("header__catalog-btn--active")
        $(".menu").toggleClass("menu--active");
        if (window.innerWidth < 992) {
            $(".menu__show").show()
        }
    })

    $(".menu__hidden-item").click(function() {
        $(".header__catalog-btn").removeClass("header__catalog-btn--active")
        $(".menu").removeClass("menu--active");
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".menu"); // тут указываем ID элемента
        var div2 = $(".header__catalog-btn")
        if (div2.is(e.target)) {
            div.removeClass("menu--active");
            $(".header__catalog-btn").removeClass("header__catalog-btn--active")
        } else if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass("menu--active");
            $(".header__catalog-btn").removeClass("header__catalog-btn--active")
        }
    });




    $(".menu__show-item").click(function() {
        let path = $(this).attr("data-tabs-path");
        $(this).addClass("menu__show-item--active");
        $(".menu__hidden").hide();
        $(`.menu__hidden[data-tabs-target="${path}"]`).slideDown()
        if (window.innerWidth < 992) {
            $(".menu__show").hide()
        }
    })

    $(".menu__hidden-mob>svg").click(function() {
        $(".menu__hidden").hide()
        $(".menu__show").show()
    })
    $(".menu__show-nav>button").click(function() {
        $(".menu").removeClass("menu--active");
        $(".header__catalog-btn").removeClass("header__catalog-btn--active")
    })
    $(".menu__hidden-mob>button").click(function() {
        $(".menu").removeClass("menu--active");
        $(".header__catalog-btn").removeClass("header__catalog-btn--active")
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".menu__show-item--active"); // тут указываем ID элемента
        let path = div.attr("data-tabs-path");
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass("menu__show-item--active");
            $(`.menu__hidden[data-tabs-target="${path}"]`).hide()
        }
    });

    $(".product__tab").click(function() {
        let path = $(this).attr("data-tabs-path");
        $(".product__tab").removeClass("product__tab--active");
        $(this).addClass("product__tab--active");
        $(".product__link").removeClass("product__link--active");
        $(`.product__link[data-tabs-target="${path}"]`).addClass("product__link--active");
        $(`.new`).removeClass("active")
        $(`.hit`).removeClass("active")
        $(`.rec`).removeClass("active")
        $(`.${path}`).addClass("active")

    })

    // Спойлеры в подвале
    $(".footer__adress-title").click(function() {
        if (window.innerWidth < 768) {
            $(this).toggleClass("footer__adress-title--active")
            $(".footer__adress").slideToggle()
        }
    })
    $(".footer__title").click(function() {
        if (window.innerWidth < 768) {
            $(this).toggleClass("footer__title--active")
            $(this).siblings(".footer__item").toggleClass("footer__item--active")
        }

    })

    $(".order__city-reset").click(function() {
        $(this).siblings("input").val('');
    })



    // Кнопка вверх
    let height = window.innerHeight
    $(".scroll-up").click(function() {
        // window.scrollTo({
        //     top: 0,
        //     behavior: "smooth"
        // })
        $("body,html").animate({
            scrollTop: 0
        }, 1000);
    })
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".scroll-up").addClass("scroll-up--active")
        } else {
            $(".scroll-up").removeClass("scroll-up--active")
        }
    })

    // показать все фильтры блога
    $(".blog__filters-all").click(function() {
        $(".blog__filter").removeClass("blog__filter--hide");
        $(this).hide()
    })

    // показать все бренды
    $(".brands-page__all").click(function() {
        $(".brands-page__item").removeClass("brands-page__item--hide");
        $(this).hide()
    })

    // показать всю информацию о бренде
    $(".brand-info__detail").click(function() {
        $(".brand-info__right p").removeClass("brand-info__hide");
        $(".brand-info__right p:first-child").removeClass("brand-info__cut");
        $(this).hide()
    })

    if (window.innerWidth < 768) {
        $(".brand-info__right p").addClass("brand-info__hide");
        $(".brand-info__right p:first-child").removeClass("brand-info__hide");

    }


    // показать всe бренды
    $(".brand-detail__all").click(function() {
        $(".brand-detail__item").removeClass("brand-detail__item--hide");
        $(this).hide()
    })


    // выпадающие списки
    $(".brand-detail__nav-bottom select").niceSelect()
    $(".catalog-sort select").niceSelect()
        // Галлерея
    $(".gallery__small").click(function() {
        let path = $(this).attr("data-tabs-path")
        $(".gallery__small").removeClass("gallery__small--active")
        $(`.gallery__small[data-tabs-path="${path}"]`).addClass("gallery__small--active")
        $(".gallery__big").removeClass("gallery__big--active")
        $(`.gallery__big[data-tabs-target="${path}"]`).addClass("gallery__big--active")
        if ($(".gallery__small:nth-child(6)").hasClass("gallery__small--active")) {
            console.log("jdsn")
            $(".gallery__smalls").animate({ scrollTop: 400 }, 300)

        }
        if ($(".gallery__small:nth-child(3)").hasClass("gallery__small--active")) {
            console.log("jdsn")
            $(".gallery__smalls").animate({ scrollTop: 0 }, 300)
        }
    })
    $(".gallery__btn--next").click(function() {
        let itemNum = Number($(".gallery__small").length)
        let path = Number($(".gallery__small--active").attr("data-tabs-path"))

        if (path < itemNum) {
            $(".gallery__small").removeClass("gallery__small--active")
            $(`.gallery__small[data-tabs-path="${path+1}"]`).addClass("gallery__small--active")
            $(".gallery__big").removeClass("gallery__big--active")
            $(`.gallery__big[data-tabs-target="${path+1}"]`).addClass("gallery__big--active")
        } else {
            $(".gallery__small").removeClass("gallery__small--active")
            $(`.gallery__small[data-tabs-path="${1}"]`).addClass("gallery__small--active")
            $(".gallery__big").removeClass("gallery__big--active")
            $(`.gallery__big[data-tabs-target="${1}"]`).addClass("gallery__big--active")
        }
        if ($(".gallery__small:nth-child(6)").hasClass("gallery__small--active")) {
            console.log("jdsn")
            $(".gallery__smalls").animate({ scrollTop: 400 }, 300)

        }
        if ($(".gallery__small:nth-child(3)").hasClass("gallery__small--active")) {
            console.log("jdsn")
            $(".gallery__smalls").animate({ scrollTop: 0 }, 300)
        }
    })
    $(".gallery__btn--prev").click(function() {
        let itemNum = Number($(".gallery__small").length)
        let path = Number($(".gallery__small--active").attr("data-tabs-path"))

        if (path !== 1) {
            $(".gallery__small").removeClass("gallery__small--active")
            $(`.gallery__small[data-tabs-path="${path-1}"]`).addClass("gallery__small--active")
            $(".gallery__big").removeClass("gallery__big--active")
            $(`.gallery__big[data-tabs-target="${path-1}"]`).addClass("gallery__big--active")
        } else {
            $(".gallery__small").removeClass("gallery__small--active")
            $(`.gallery__small[data-tabs-path="${itemNum}"]`).addClass("gallery__small--active")
            $(".gallery__big").removeClass("gallery__big--active")
            $(`.gallery__big[data-tabs-target="${itemNum}"]`).addClass("gallery__big--active")
        }
        if ($(".gallery__small:nth-child(6)").hasClass("gallery__small--active")) {
            console.log("jdsn")
            $(".gallery__smalls").animate({ scrollTop: 400 }, 300)

        }
        if ($(".gallery__small:nth-child(3)").hasClass("gallery__small--active")) {
            console.log("jdsn")
            $(".gallery__smalls").animate({ scrollTop: 0 }, 300)
        }
    })

    $(".map__block-mob").click(function() {
        $(this).toggleClass("map__block-mob--active")
        $("#map").toggleClass("map--active")
    })

    cartCalc()


    // Ползунки ввода цены
    const rangeSlider = document.getElementById("range-slider")
    const rangeInput0 = document.getElementById("input-range0")
    const rangeInput1 = document.getElementById("input-range1")
    const rangeInputs = [rangeInput0, rangeInput1]
    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [0, 999999],
            connect: true,
            step: 1,
            range: {
                'min': 0,
                'max': 999999
            }
        });
    }
    if (rangeSlider) {
        rangeSlider.noUiSlider.on('update', function(values, handle) {
            rangeInputs[handle].value = Math.round(values[handle])
        })
        rangeInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value)
            })
        })
    }


    const setRangeSlider = (i, value) => {
        let array = [null, null];
        array[i] = value;

        rangeSlider.noUiSlider.set(array);
    };



    // Пункты в фильтре
    if (window.innerWidth < 768) {
        $(".catalog-filter__show").removeClass("catalog-filter__show--active")
        $(".catalog-filter__hidden").removeClass("catalog-filter__hidden--active")
    }
    $(".catalog-filter__show").click(function() {
        $(this).toggleClass("catalog-filter__show--active")
        $(".catalog-filter__hidden").toggleClass("catalog-filter__hidden--active")
    })
    $(".catalog-filter__price-show").click(function() {
        $(this).toggleClass("catalog-filter__price-show--active")
        $(".catalog-filter__price-hidden").toggleClass("catalog-filter__price-hidden--active")
    })
    $(".catalog-filter__brand-show").click(function() {
        $(this).toggleClass("catalog-filter__brand-show--active")
        $(".catalog-filter__brand-hidden").toggleClass("catalog-filter__brand-hidden--active")
    })
    $(".catalog-filter__material-show").click(function() {
        $(this).toggleClass("catalog-filter__material-show--active")
        $(".catalog-filter__material-hidden").toggleClass("catalog-filter__material-hidden--active")
    })

    $(".filter__item").click(function() {
        $(this).hide()
    })

    // Показать все отзывы
    $(".feedback__btn").click(function() {
        $(this).hide()
        $(".feedback__item").removeClass("feedback__item--hide")
    })

    // Скрываем текст
    $(".catalog-item__info-hide").click(function() {
        $(this).removeClass("catalog-item__info-hide--active")
        $(".catalog-item__info-show").addClass("catalog-item__info-show--active")
        $(".text__inner").hide()
    })
    $(".catalog-item__info-show").click(function() {
        $(this).removeClass("catalog-item__info-show--active")
        $(".catalog-item__info-hide").addClass("catalog-item__info-hide--active")
        $(".text__inner").show()
    })

    // Скрываем характеристики
    $(".desc-hide").click(function() {
        $(this).removeClass("desc-hide--active")
        $(".desc-show").addClass("desc-show--active")
        $(".desc__items").hide()
    })
    $(".desc-show").click(function() {
        $(this).removeClass("desc-show--active")
        $(".desc-hide").addClass("desc-hide--active")
        $(".desc__items").show()
    })
    if (window.innerWidth < 768) {
        $(".desc__items").hide()

    }

    $(".order__city-item").click(function() {
        let text = $(this).text()
            // $(".order__city-input").val('');
        $(".order__city-input").attr("value", text)
    })

    $("input[name='method']").click(function() {
        let val = $(this).attr("value");
        $(".order__way").hide();
        $(`.order__${val}`).show()
    })

    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (       )         -' });

    $(".order__user-input select").niceSelect()
    $(".podborka-page__nav-right select").niceSelect()
    $(".search__sort select").niceSelect()
    $(".modal7__select select").niceSelect()



    $(".order__user-tab").click(function() {
        let path = $(this).attr("data-tabs-path")
        $(".order__user-tab").removeClass("order__user-tab--active")
        $(`.order__user-tab[data-tabs-path="${path}"]`).addClass("order__user-tab--active")
        $(".order__user-content").removeClass("order__user-content--active")
        $(`.order__user-content[data-tabs-target="${path}"]`).addClass("order__user-content--active")
    })

    if (window.innerWidth < 380) {
        $(".order__city-input").attr("placeholder", "")
    }

    // показать всю подборку
    $(".podborka-page__all").click(function() {
        $(".podborka-page__item").removeClass("podborka-page__item--hide");
        $(this).hide()
    })

    // показать все результаты поиска
    $(".search__all").click(function() {
        $(".search__item").removeClass("search__item--hide");
        $(this).hide()
    })

    $(".catalog-item__info-btn").click(function() {
        $(this).removeClass("catalog-item__info-btn--active");
        $(".text__inner-hidden ").show()
    })
    $(".desc__item-btn").click(function() {
        $(this).removeClass("desc__item-btn--active");
        $(".desc__item").removeClass("desc__item--hide")
    })

    $(".catalog-filter__brand-all").click(function() {
        $(this).hide()
        $(".catalog-filter__brand-item").removeClass("catalog-filter__brand-item--hidden")
    })
    $(".catalog-filter__material-all").click(function() {
        $(this).hide()
        $(".catalog-filter__material-item").removeClass("catalog-filter__material-item--hidden")
    })
    $(".header__nav-li").hover(onIn, onOut);
});


function onIn() {
    // setTimeout(openHiddenMenuItem, 300)
    let el = $(this)
    setTimeout(function() {
        if (el.is(':hover')) {
            el.children(".header__item-show").addClass("header__item-show--active")
            el.children(".header__item-hidden").addClass("header__item-hidden--active")
        }

    }, 200);
    // $(this).children(".header__item-show").addClass("header__item-show--active")
    // $(this).children(".header__item-hidden").addClass("header__item-hidden--active")
}

function onOut() {
    $(this).children(".header__item-show").removeClass("header__item-show--active")
    $(this).children(".header__item-hidden").removeClass("header__item-hidden--active")
}

function openHiddenMenuItem() {
    $(this).children(".header__item-show").addClass("header__item-show--active")
    $(this).children(".header__item-hidden").addClass("header__item-hidden--active")
}

// Калькулятор корзины
function cartCalc() {
    $('.cart__calc .cart__calc-minus').click(function() {
        let a = $(this).closest('.cart__calc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.cart__calc').find('input').val(b);
        } else {
            $(this).closest('.cart__calc').find('input').val(a);
            $(".cart__calc-minus").addClass("disabled");
        }
    });
    $('.cart__calc .cart__calc-plus').click(function() {
        let a = $(this).closest('.cart__calc').find('input').val();
        let b = +a + 1;
        $(this).closest('.cart__calc').find('input').val(b);
        $(".cart__calc-minus").removeClass("disabled");
    });





}