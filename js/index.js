console.log("conected from index.js");


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({

        loop: false,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 3,
                nav: true,
                center: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                center: true
            }
        }
    });

});

