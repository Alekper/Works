var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: false,
    margin: 10,
    responsive: {

    }
});
owl.on('mousewheel', '.owl-stage', function(e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


$(function() {



    $("#sp-pic").css({
        "display": "none",
        "width": "100%",
        "height": "100%",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "contain",
        "position": "fixed",
        "top": 0,
        "left": 0,
        "z-index": 999,
        "background-color": "rgba(0, 0, 0, 0.8"

    });

    $("#sp-mainPic").on("click", function() {
        let src = $(this).attr("src");

        $("#sp-pic").css({
            "display": "block",
            "background-image": `url("${src}")`,

        })

    })

    $("#sp-pic").on("click", function() {
        $("#sp-pic").css({
            "display": "none"

        });
    });

    $(".sp-carouselPic").on("click", function() {
        let picLink = $(this).attr("src");
        console.log(picLink);
        $("#sp-mainPic").attr("src", picLink)
    })




});