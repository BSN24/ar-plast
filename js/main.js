$(document).ready(function () {

    var navArray = [
        "<svg class='owl-arrow'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='img/svg-sprite/symbol/sprite.svg#chevron-left'></use></svg>",
        "<svg class='owl-arrow'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='img/svg-sprite/symbol/sprite.svg#chevron-right'></use></svg>"
    ];

    $(".main-slider--js").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        smartSpeed: 400,
        navText: navArray
    });

    $(".product-card__slider").each(function () {

       var cardSlider = $(this).owlCarousel({
           items: 1,
           nav: false,
           dots: false,
           smartSpeed: 250,
           mouseDrag: false,
           touchDrag: false,
           dotsContainer: ".product-card__dots"
       });

       $(this)
           .parents(".product-card__wrap")
           .find(".product-card__dots")
           .on("click", ".owl-dot", function () {
               cardSlider.trigger("to.owl.carousel", [$(this).index(), 300]);
       });

    });

    //mobile menu
    (function () {
        $(".hamburger-btn").click(function () {
            $(".mobile-nav").addClass("mobile-nav--active");
        });

        $(".mobile-nav__btn").click(function () {
            $(".mobile-nav").removeClass("mobile-nav--active");
        });

    })();


    //Filter
    (function () {

        $(".filter-btn-open").click(function () {
            $(".filter").addClass("filter--open");
        });

        $(".filter__close").click(function () {
            $(".catalog__filter").removeClass("filter--open");
        });

        $(document).click(function (e){
            var filter = $(".catalog__filter");
            var filterBtn = $(".filter-btn-open");

            if (window.matchMedia("(max-width: 767.98px)").matches) {
                if ((!filter.is(e.target) && !filterBtn.is(e.target)) && filter.has(e.target).length === 0) {
                    filter.removeClass("filter--open");
                }
            }
        });

    })();

});