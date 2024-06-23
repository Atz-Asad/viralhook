
(function ($) {
    "use strict";

    

    // ------------ yesr -----------//

    if ($('#year').length > 0) {
        document.getElementById("year").innerHTML = new Date().getFullYear();
    }

    $('.menu-icon').click(function() {
        $('body').addClass('sidebaractive');
    });
    

    /*--------------------------------------------------------
    /  01. Mobile menu Start
    /--------------------------------------------------------*/
    if ($('.mobileMenu').length > 0) {
        function mobileMenu() {
            $('.mobileMenu li').each(function(index, item){
            let selfThis = (this)
            if ($(item).find('ul').length) {
                $(item).addClass('dropdown-arrow');
            }
            $(item).on('click', function(e) {
                e.stopPropagation();
                if ($(this).hasClass('dropdown-arrow')) {
                $('.mobileMenu li').not(this).find('ul').slideUp(300);
                $(this).children('ul').slideToggle(300);
                if(!$(this).hasClass('openUL')) {
                    $(this).siblings().removeClass('openUL');
                    $(this).addClass('openUL');
                }else {
                    $(this).removeClass('openUL');
                }
                // For nested submenus
                $(this).find('ul li').each(function(index, subItem) {
                    $(subItem).off('click').on('click', function(e) {
                    e.stopPropagation();
                    if ($(subItem).hasClass('dropdown-arrow')) {
                        $(subItem).siblings().find('ul').slideUp(300);
                        $(subItem).children('ul').slideToggle(300);
                        if(!$(this).hasClass('openUL')) {
                        $(this).siblings().removeClass('openUL');
                        $(this).addClass('openUL');
                        }else {
                        $(this).removeClass('openUL');
                        }
                    }
                    });
                });
                }
            });
            });
        }
        mobileMenu();
    }

    /*--------------------------------------------------------
    /   Mobile menu End
    /--------------------------------------------------------*/

    // 03 FIXED HEADER =====
    window.addEventListener("scroll", () => {
        if ($(window).width() > 1200) {
        const toFixHeaders = document.querySelectorAll(".to-be-fixed");
        toFixHeaders.forEach(toFixHeader => {
            if (window.pageYOffset > 100) {
                toFixHeader.classList.add("fixed");
                document.body.style.paddingTop = toFixHeader.getBoundingClientRect().height + 'px';
            } else {
                toFixHeader.classList.remove("fixed");
                document.body.style.paddingTop = 0;
            }
        })
    }
    });
    //===== FIXED HEADER

    
    /*--------------------------------------------------------
   /   04. Back To Top Start
   /--------------------------------------------------------*/
   $(document).ready(() => {
        const backToTop = $('#backToTop');
        const amountScrolled = 500;

        $(window).scroll(() => {
            $(window).scrollTop() >= amountScrolled 
                ? backToTop.fadeIn('fast') 
                : backToTop.fadeOut('fast');
        });

        backToTop.click(() => {
            $('body, html').animate({
                scrollTop: 0
            }, 0);  // Set animation duration to 0 milliseconds for an immediate jump
            return false;
        });
    });

    /*--------------------------------------------------------
    /  Back To Top End
    /--------------------------------------------------------*/

    // 05. megamenu
    $(document).ready(function(){
        $(".search-icon").click(function(){
          $(".search-box").addClass("mega-intro");
        }),800;
        $(".search-box-close").click(function(){
            $(".search-box").removeClass("mega-intro");
        }),800;
    });

    // breaking__news-slide
    if ($('.breaking-news-slider').length > 0) {

        var swiper = new Swiper(".breaking-news-slider", {
            slidesPerView: 3,
            spaceBetween: 100,
            loop: true,
            autoplay: false,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            speed: 1500,
            navigation: {
              nextEl: ".breaking-news-button-next",
              prevEl: ".breaking-news-button-prev",
            },
            breakpoints: {
    
                320: {
                    slidesPerView: 1,
                    spaceBetween:20,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween:20,
                },
                650: {
                    slidesPerView: 2,
                    spaceBetween:20,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1065:{
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 70,
                }
            },
            keyboard: {
                enabled: true,
            }
        });
    }

    //card-news-short-slider
    if ($('.card-news-short-slider').length > 0) {
        var swiper = new Swiper(".card-news-short-slider", {
            slidesPerView: 6,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: ".card-news-short-button-next",
                prevEl: ".card-news-short-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                380:{
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 3,
                },
                739: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 5,
                },
                1150:{
                    slidesPerView: 5,
                },
                1280: {
                    slidesPerView: 6,
                }
            },
            keyboard: {
                enabled: true,
            }
        });
    }

    // wow-js active
    new WOW().init();
    
    // Home Page 4 
    // Header top Slider
    if ($('.header-top-slider').length > 0) {

        var swiper = new Swiper(".header-top-slider", {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            speed:2000,
            pauseOnMouseEnter: true,
            navigation: {
            nextEl: ".header-top-slider-button-next",
            prevEl: ".header-top-slider-button-prev",
            },
        });
    }

    //Current date time Show
    if ($('#carrent-date').length > 0) {

        const d = new Date();
        // Format the date as "Month Day, Year"
        const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
        const formattedDate = d.toLocaleDateString('en-US', dateOptions);
        document.getElementById("carrent-date").innerHTML = formattedDate;
    
        // Get the day of the week
        const weekDayOptions = { weekday: 'long' };
        const dayOfWeek = d.toLocaleDateString('en-US', weekDayOptions);
    
        // Check if the element exists before updating its innerHTML
        const weekdayElement = document.getElementById("weekday");
        if (weekdayElement) {
            weekdayElement.innerHTML = dayOfWeek;
        } 
    }
    
    // home 2 hero slider
    if ($('.hero-slider').length > 0) {
        var swiper = new Swiper(".hero-slider", {
            slidesPerView: 1,
            freeMode: false,
            effect: "fade",
            loop:true,
            pagination: {
                el: ".hero-slider-pagination",
              },
          });
          var swiper2 = new Swiper(".hero-thum-slider", {
            slidesPerView: 1,
            loop:true,
            effect: "cube",
            grabCursor: true,
            navigation: {
              nextEl: ".hero-slider-button-next",
              prevEl: ".hero-slider-button-prev",
            },
            thumbs: {
              swiper: swiper,
            },
        });
    }

    // article  page 1 slider start
    if ($('.article-slider-thumb-wrapper').length > 0) {
        var swiper = new Swiper(".article-slider-thumb-wrapper", {
            spaceBetween: 10,
            slidesPerView: 5,
            breakpoints: {
                320: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 5,
                },     
               
            },
        });
    };

    if ($('.article-slider-wrapper').length > 0) {
        var swiper2 = new Swiper(".article-slider-wrapper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-slide-button-next",
            prevEl: ".swiper-slide-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        })
    };

    if ($('.odometer').length > 0) {

        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
        
                // Initialize Odometer with duration option
                var odometer = new Odometer({
                    el: this,
                    value: 0,
                    format: '',
                    duration: 2000, // Set the duration in milliseconds
                });
        
                // Animate the odometer to the target value
                odometer.update(countNumber);
            });
        });
    }
    /*--------------------------------------------------------
    /  Video and images Popup Start
    /--------------------------------------------------------*/
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });

    new VenoBox({
        selector: '.my-video-links',
    });
    /*--------------------------------------------------------
    /   Video and images Popup End
    /--------------------------------------------------------*/

//    $(document).ready(function(){
//       $('.themeModeBtn').on('click',function(){
//            var modeCheck = $(this).data('mode');
//            $(this).hide();
//            $(this).siblings('.themeModeBtn').show();
//           // $(this).addClass('active');
//            document.documentElement.setAttribute("data-bs-theme", modeCheck);
//            window.localStorage.setItem("theme", modeCheck);
//       });
//    });

    // themmode js
    document.addEventListener('DOMContentLoaded', function () {
        function setThemeMode() {
          const currentTheme = window.localStorage.getItem('theme');
          const htmlElement = document.documentElement;
      
          if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            activateThemeModeButtons('dark');
          } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            activateThemeModeButtons('light');
          }
        }
      
        function activateThemeModeButtons(activeTheme) {
          const themeModeButtons = document.querySelectorAll('.themeModeBtn');
      
          themeModeButtons.forEach(button => {
            const buttonTheme = button.getAttribute('data-mode');
            if (buttonTheme === activeTheme) {
              button.classList.add('active'); // Add 'active' class to active button
            } else {
              button.classList.remove('active'); // Remove 'active' class from inactive button
            }
          });
        }
      
        function bindThemeModeEvents() {
          const themeModeButtons = document.querySelectorAll('.themeModeBtn');
      
          themeModeButtons.forEach(button => {
            button.addEventListener('click', () => {
              const selectedTheme = button.getAttribute('data-mode');
              document.documentElement.setAttribute('data-bs-theme', selectedTheme);
              window.localStorage.setItem('theme', selectedTheme);
              activateThemeModeButtons(selectedTheme);
            });
          });
        }
      
        setThemeMode();
        bindThemeModeEvents();
    });
      

    


})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    function loadCustomizeData() {
        window.addEventListener('load', function() {
            const date = new Date();
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        var html = xhr.responseText;
                        document.querySelector("body").insertAdjacentHTML('beforeend', html);
                        loadCustomizeData();
                        loadSavedCSS();
                    } else {
                        console.error('Error:', xhr.status);
                    }
                }
            };

            xhr.open('GET', 'svg.html?time=' + date.getTime(), true);
            xhr.send();
        });
    }
   
});