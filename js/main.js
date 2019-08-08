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

});