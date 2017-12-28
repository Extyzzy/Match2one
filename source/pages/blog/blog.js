import './blog.scss';
import 'normalize.css';

$(document).ready(function(){
    $('.sliderContent').slick({
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

