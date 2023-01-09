$(document).ready(function () {

    $('.sliders').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1900,
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: true,
        prevArrow:"<button type='button' class='btn-slick-prev btn-slider'><img src='images/grow left.svg' alt='prev'></button>",
        nextArrow:"<button type='button' class='btn-slick-next btn-slider'><img src='images/Grow right.svg' alt='next'></button>",
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 1101,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 851,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false, 
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
        },
    ]
});

    $(".mibile-menu").click(function(){
        $(".mibile-menu span").toggleClass('active');
        $(".menu").toggleClass('active');
        $("body").toggleClass('owerlay');
    })
});