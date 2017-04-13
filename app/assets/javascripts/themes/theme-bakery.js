jQuery(function (jQuery) {

    'use strict';

    var jQuery = jQuery.noConflict();



    /**
     * ==============================
     * Page Loader
     * ==============================
    */

    function addCSS(css){

        var head    = document.getElementsByTagName('head')[0],
            stylez       = document.createElement('style');

        stylez.setAttribute('type', 'text/css');

        if (stylez.styleSheet) {
            stylez.styleSheet.cssText = css;
        } else {                        
            stylez.appendChild(document.createTextNode(css));
        }

        head.appendChild(stylez);
    }

    addCSS('<style>#full-site-wrapper { display: none; opacity: 0; }</style>')

    jQuery(window).load(function () {
        
        setTimeout(function() {
            jQuery("#loading").fadeOut(300);
            jQuery("#full-site-wrapper").show().animate({
                opacity: 1
            }, 150)
        }, 3100);

        /**
         * ==============================
         *  Custom Scroll Style
         * ==============================
        */

        if (jQuery(window).width() < 767) {
            if (jQuery(".top-bar .navigation").length) {
                jQuery(".top-bar .navigation").mCustomScrollbar({
                    theme: "dark-2",
                    scrollButtons: {
                        enable: false
                    }
                });
            }
        }

    });


    /**
     * ==============================
     *  You Tube Video 
     * ==============================
    */

    /** var player;

    // this function gets called when API is ready to use
    function onYouTubePlayerAPIReady() {
        // create the global player from the specific iframe (#video)
        player = new YT.Player('video', {
            events: {
                // call this function when player is ready to use
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(event) {
        var playButton = document.getElementById("play-button");
        playButton.addEventListener("click", function () {
            if (player.pauseVideo) {
                player.playVideo();
                jQuery('#play-button').css({display: 'none'});
            }
            else {
                player.pauseVideo();
            }
        });
    }
    // Inject YouTube API script
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); **/


    jQuery(window).scroll(function () {

        /**
        * ==============================
        * Scroll To Top 
        * ==============================
        */

        if (jQuery(this).scrollTop() > 100) {
            jQuery('.to-top').css({bottom: '55px'});
        } else {
            jQuery('.to-top').css({bottom: '-150px'});
        }

    });


    /**
     * ==============================
     *  Remove Active Class 
     * ==============================
    */

    jQuery(document).click(function (e) {
        var active = e.target ? jQuery(e.target).closest('.active').get(0) : null;
        jQuery(".header-wrap .navigation").removeClass('off-canvas');
        jQuery("body").removeClass('off-canvas-body');
        jQuery(".top-elements li" + ",.nav-trigger").filter(function () {
            return !active || active !== this;
        }).removeClass('active');
    });


    jQuery(function ($) {



    /**
     * ==============================
     *  Header Off Canvas Add 
     * ==============================
    */
        jQuery(".nav-trigger").on("click", function (e) {
            e.stopPropagation();
            jQuery(".header-wrap .navigation").toggleClass("off-canvas");
            jQuery("body").toggleClass("off-canvas-body");
        });



    /**
     * ==============================
     *  Scroll To Top Animat
     * ==============================
    */
        jQuery('.to-top').click(function () {
            jQuery('html, body').animate({scrollTop: 0}, 800);
            return false;
        });


    /**
     * ==============================
     *  Product Thumbnails Hover 
     * ==============================
    */
        jQuery('.product-thumbnails').on('click', 'li', function () {
            jQuery('.product-thumbnails li.active').removeClass('active');
            jQuery(this).addClass('active');
        });


    /**
     * ==============================
     *  Header PopUps 
     * ==============================
    */
        jQuery(".search-hover, .toggle-hover, .cart-hover").each(function () {
            var $toggle = jQuery(this);
            $toggle.children('a').click(function (e) {
                e.preventDefault();
                $toggle.toggleClass("active");
            });
        });



    /**
     * ==============================
     *  Subscribe Popup 
     * ==============================
    */
        jQuery(".subscribe-me").subscribeBetter({
            trigger: "onidle", // You can choose which kind of trigger you want for the subscription modal to appear. Available triggers are "atendpage" which will display when the user scrolls to the bottom of the page, "onload" which will display once the page is loaded, and "onidle" which will display after you've scrolled.
            animation: "flyInDown", // You can set the entrance animation here. Available options are "fade", "flyInRight", "flyInLeft", "flyInUp", and "flyInDown". The default value is "fade".
            delay: 0, // You can set the delay between the trigger and the appearance of the modal window. This works on all triggers. The value should be in milliseconds. The default value is 0.
            showOnce: true, // Toggle this to false if you hate your users. :)
            autoClose: false, // Toggle this to true to automatically close the modal window when the user continue to scroll to make it less intrusive. The default value is false.
            scrollableModal: false      //  If the modal window is long and you need the ability for the form to be scrollable, toggle this to true. The default value is false.
        });



    /**
     * ==============================
     *  Page Loader Text 
     * ==============================
    */
        var words = ["SUNGLASSES", "FASHION", "INTERIOR", "COSMETIC", "JEWELRY", "BAKERY", "BIKE", "ACCESSORIES", "COLLECTIONS", "SUGGETIONS"];

        window.addEventListener("load", function () {
            var randoms = window.document.getElementsByClassName("randoms");
            for (var i = 0; i < randoms.length; i++)
                changeWord(randoms[i]);
        }, false);

        function changeWord(a) {
            a.style.opacity = '0.1';
            a.innerHTML = words[getRandomInt(0, words.length - 1)];
            setTimeout(function () {
                a.style.opacity = '1';
            }, 825);
            setTimeout(function () {
                changeWord(a);
            }, getRandomInt(500, 1600));
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }


    /**
     * ==============================
     *  Revolution Slider
     * ==============================
    */
        if (jQuery('.slider-section').length > 0) {
            jQuery('.tp-banner').revolution({
                delay: 15000,
                startwidth: 1170,
                startheight: 800,
                hideThumbs: 10,
                fullWidth: "on",
                forceFullWidth: "on",
                onHoverStop: "off",
                navigationStyle: "square",
                spinner: "spinner2",
                hideTimerBar: "on"
            });
        }


    /**
     * ==============================
     *  Sticky Header
     * ==============================
    */

                
        jQuery(".main-header").sticky({ topSpacing: 0 });
                




    /**
     * ==============================
     *  Countdown
     * ==============================
    */
        if ($().countdown) {
            var austDay = new Date();
            austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 25);
            $('#dealCountdown1').countdown({until: austDay});
            $('#dealCountdown2').countdown({until: austDay});
            $('#dealCountdown3').countdown({until: austDay});
        }


    /**
     * ==============================
     *  Video Popup
     * ==============================
    */
        var $doc = $(document);
        $doc.on('hidden.bs.modal', '#video-popup', function () {
            $(this).find('iframe').attr('src', '');
        });
        $doc.on('show.bs.modal', '#video-popup', function (e) {
            var $a = $(e.relatedTarget);
            var src = $a.data('iframe');
            if (src) {
                $(this).find('iframe').attr('src', src);
            }
        });



        var swiperslider1 = jQuery('.swiper-slider-1 .swiper-container');
        var swiperslider2 = jQuery('.swiper-slider-2 .swiper-container');
        var swiperslider3 = jQuery('.swiper-slider-3 .swiper-container');

        jQuery(document).ready(function () {

            jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                updater();
            });

            if (jQuery().swiper) {
                //Product Slider 1
                if (swiperslider1.length) {
                    swiperslider1 = new Swiper(swiperslider1, {
                        pagination: '.swiper-pagination',
                        slidesPerView: 4,
                        paginationClickable: true,
                        spaceBetween: 30,
                        loop: true,
                        nextButton: '.swiper-slider-1 .swiper-next',
                        prevButton: '.swiper-slider-1 .swiper-prev',
                        breakpoints: {
                            481: {
                                slidesPerView: 1,
                                spaceBetweenSlides: 10
                            },
                            991: {
                                slidesPerView: 2,
                                spaceBetweenSlides: 20
                            },
                            1199: {
                                slidesPerView: 3,
                                spaceBetweenSlides: 30
                            }
                        }
                    });
                }

                //Product Slider 2
                if (swiperslider2.length) {
                    swiperslider2 = new Swiper(swiperslider2, {
                        slidesPerView: 4,
                        paginationClickable: true,
                        spaceBetween: 30,
                        loop: true,
                        nextButton: '.swiper-slider-2 .swiper-next',
                        prevButton: '.swiper-slider-2 .swiper-prev',
                        breakpoints: {
                            481: {
                                slidesPerView: 1,
                                spaceBetweenSlides: 10
                            },
                            991: {
                                slidesPerView: 2,
                                spaceBetweenSlides: 20
                            },
                            1199: {
                                slidesPerView: 3,
                                spaceBetweenSlides: 30
                            }
                        }
                    });
                }

                //Product Slider 3
                if (swiperslider3.length) {
                    swiperslider3 = new Swiper(swiperslider3, {
                        slidesPerView: 4,
                        paginationClickable: true,
                        spaceBetween: 30,
                        loop: true,
                        nextButton: '.swiper-slider-3 .swiper-next',
                        prevButton: '.swiper-slider-3 .swiper-prev',
                        breakpoints: {
                            481: {
                                slidesPerView: 1,
                                spaceBetweenSlides: 10
                            },
                            991: {
                                slidesPerView: 2,
                                spaceBetweenSlides: 20
                            },
                            1199: {
                                slidesPerView: 3,
                                spaceBetweenSlides: 30
                            }
                        }
                    });
                }
            }
            updater();

        });

        function updater() {

            // refresh swiper slider
            if (jQuery().swiper) {
                //
                if (typeof (swiperslider1.length) === 'undefined') {
                    swiperslider1.update();
                    swiperslider1.onResize();
                }
                //
                if (typeof (swiperslider2.length) === 'undefined') {
                    swiperslider2.update();
                    swiperslider2.onResize();
                }
                //
                if (typeof (swiperslider3.length) === 'undefined') {
                    swiperslider3.update();
                    swiperslider3.onResize();
                }
            }
        }
    });

    jQuery(window).resize(function () {
        updater();
    });


});