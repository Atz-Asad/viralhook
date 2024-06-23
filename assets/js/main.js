(function ($) {
    ("use strict");
    // Page loading
    $(window).on("load", function () {
        $("#preloader-active").fadeOut("slow");
        $("body").css({
            overflow: "visible"
        });
    });

    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    });

    /*---- CounterUp ----*/
    if ($(".count").length) {
        $(".count").counterUp({
            delay: 10,
            time: 1000
        });
    }

    /*marquee image*/
    if ($(".marque-images").length) {
        $(".marque-images").each(function () {
            var t = 0;
            var i = 1;
            var $this = $(this);
            setInterval(function () {
                t += i;
                $this.css("background-position-x", -t + "px");
            }, 10);
        });
    }
    /*Data Fillter*/
    $(".btn-filter").on("click", (e) => {
        const filter = $(e.target).attr("data-filter");
        console.log(filter);
        const items = $(".item-content").parent();
        for (item of items) {
            if (filter == "") {
                $(item).addClass("animate__animated animate__fadeIn");
                $(item).parent().addClass("animate__animated animate__fadeIn");
                $(item).removeClass("d-none");
                $(item).parent().removeClass("d-none");

                console.log("x");
            } else if ($(item).attr("data-category") == filter) {
                $(item).addClass("animate__animated animate__fadeIn");
                $(item).parent().addClass("animate__animated animate__fadeIn");
                $(item).removeClass("d-none");
                $(item).parent().removeClass("d-none");
            } else {
                $(item).addClass("d-none");
                $(item).parent().addClass("d-none");
                $(item).removeClass("animate__animated animate__fadeIn");
                $(item).parent().removeClass("animate__animated animate__fadeIn");
            }
        }
    });

    $(".filter-nav button").on("click", function () {
         $(this).addClass("active").siblings().removeClass("active");
    });

    /*------ Wow Active ----*/
    new WOW().init();

   
    
})(jQuery);
