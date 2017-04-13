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
         * ISOTOPE
         * ==============================
        */

        if (jQuery().isotope) {
            var jQuerycontainer = jQuery('.isotope'); // cache container
            jQuerycontainer.isotope({
                itemSelector: '.isotope-item'
            });
            jQuery('.filtrable a').click(function () {
                var selector = jQuery(this).attr('data-filter');
                jQuery('.filtrable li').removeClass('current');
                jQuery(this).parent().addClass('current');
                jQuerycontainer.isotope({filter: selector});
                return false;
            });
            jQuerycontainer.isotope('layout'); // layout/layout
        }

    });


    jQuery(window).resize(function () {
        if (jQuery().isotope) {
            jQuery('.row.isotope').isotope('layout'); // layout/relayout on window resize
        }
    });

    jQuery('#product-filter').isotope({filter: '.tab-1'});
        // ---------------------------------------------------------------------------------------

    /**
     * ==============================
     *  Contact page Map
     * ==============================
    */

    function init_map() {

        var myOptions = {
            zoom: 10,
            center: new google.maps.LatLng(41.079379, 28.9984466), // Change Map Address Here
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('map-canvas2'), myOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(41.079379, 28.9984466) // Change Map Address position Here
        });

        var infowindow = new google.maps.InfoWindow({
            content: '<strong>Location</strong><br>London, United Kingdom<br>'
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

        infowindow.open(map, marker);

        /*
        // Set Google Map size
        var mapWidth = jQuery(".contact-2 > div").outerWidth();
        var mapHeight = jQuery(".contact-2 > div").outerHeight();
        //console.log(mapHeight)

        jQuery("#map-canvas2").css({
            width: mapWidth + 'px',
            height: mapHeight + 'px'
        });
        */
        //google.maps.event.addDomListener(window, 'load', init_map());
    }



    /**
     * ==============================
     *  You Tube Video
     * ==============================
    */

  //   var player;

  //   // this function gets called when API is ready to use
  //   function onYouTubePlayerAPIReady() {
  //       // create the global player from the specific iframe (#video)
  //       player = new YT.Player('video', {
  //           events: {
  //               // call this function when player is ready to use
  //               'onReady': onPlayerReady
  //           }
  //       });
  //   }
  //   function onPlayerReady(event) {
  //       var playButton = document.getElementById("play-button");
  //       playButton.addEventListener("click", function () {
  //           player.playVideo();
  //           jQuery('#play-button').css({display: 'none'});
  //       });
  //   }
  //   // Inject YouTube API script
  //   var tag = document.createElement('script');
  // tag.src = "https://www.youtube.com/player_api";
  // var firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    /**
     * ==============================
     *  Scroll To Top
     * ==============================
    */

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.to-top').css({bottom: '55px'});
        }
        else {
            jQuery('.to-top').css({bottom: '-150px'});
        }
    });

    jQuery(function ($) {

        /**
         * ==============================
         *  Post Masonry
         * ==============================
        */

        jQuery(document).ready(function () {

            if (jQuery('.post-masonry').length) {
                $('.post-masonry').isotope({
                    itemSelector: '.post-masonry .post-wrap',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.grid-sizer'
                    }
                });
            }

        });


        /**
         * ==============================
         *  Custom Scroll Style
         * ==============================
        */

        jQuery(window).load(function () {
            if (jQuery(".hdr-stl-2").length) {
                jQuery(".hdr-stl-2").mCustomScrollbar({
                    theme: "dark-2",
                    scrollButtons: {
                        enable: false
                    }
                });
            }
            if (jQuery(window).width() < 767) {
                if (jQuery(".header-wrap").length) {
                    jQuery(".navigation").mCustomScrollbar({
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
         *  Remove Active Class
         * ==============================
        */

        jQuery(document).click(function (e) {
            var active = e.target ? jQuery(e.target).closest('.active').get(0) : null;
            jQuery(".header-wrap .navigation").removeClass('off-canvas');
            jQuery(".hdr-stl-2").removeClass('off-canvas');
            jQuery("body").removeClass('off-canvas-body');
            jQuery(".top-elements li" + ",.nav-trigger").filter(function () {
                return !active || active !== this;
            }).removeClass('active');
        });


        /**
         * ==============================
         *  Header Off Canvas Add
         * ==============================
        */

        jQuery(".nav-trigger").on("click", function (e) {
            e.stopPropagation();
            jQuery(".header-wrap .navigation").toggleClass("off-canvas");
            jQuery(".hdr-stl-2").toggleClass("off-canvas");
            if ($(".hdr-stl-2").length) {
                jQuery("body").toggleClass("off-canvas-body");
            }
        });


        /**
         * ==============================
         *  Scroll To Top Animate
         * ==============================
        */

        jQuery('.to-top').click(function () {
            jQuery('html, body').animate({scrollTop: 0}, 800);
            return false;
        });

        /**
         * ==============================
         *  Product Thumbnails Hove
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

        if (jQuery(window).width() > 760 && (jQuery('.main-header').length > 0)) {
            jQuery(".main-header").sticky({topSpacing: 0});
        }


        /**
         * ==============================
         *  Related Product Slider
         * ==============================
        */

        if (jQuery('.related-prod-slider').length > 0) {
            jQuery(".related-prod-slider").owlCarousel({
                dots: false,
                loop: true,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 100,
                responsive: {
                    0: {items: 1},
                    1200: {items: 4},
                    990: {items: 3},
                    600: {items: 2},
                    480: {items: 1}
                }
            });
        }

        /**
         * ==============================
         *  Related Product Slider 2
         * ==============================
        */

        if (jQuery('.related-prod-slider-2').length > 0) {

            jQuery(".related-prod-slider-2").owlCarousel({
                dots: false,
                loop: true,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 100,
                responsive: {
                    0: {items: 1},
                    1200: {items: 3},
                    990: {items: 2},
                    600: {items: 2},
                    480: {items: 1}
                }
            });
        }

        /**
         * ==============================
         *  Recent Product Slider
         * ==============================
        */

        if (jQuery('.recent-prod-slider').length > 0) {
            jQuery(".recent-prod-slider").owlCarousel({
                dots: false,
                loop: true,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 100,
                responsive: {
                    0: {items: 1},
                    1200: {items: 1},
                    767: {items: 1},
                    600: {items: 2},
                    480: {items: 1}
                }
            });
        }

        jQuery(".recent-nav .next").on("click", function () {
            jQuery(".recent-prod-slider").trigger('next.owl.carousel');
        });
        jQuery(".recent-nav .prev").on("click", function () {
            jQuery(".recent-prod-slider").trigger('prev.owl.carousel');
        });

        /**
         * ==============================
         *  Recent Post Slider
         * ==============================
        */

        if (jQuery('.related-post-slider').length > 0) {
            jQuery(".related-post-slider").owlCarousel({
                dots: false,
                loop: false,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 100,
                responsive: {
                    0: {items: 1},
                    1200: {items: 2},
                    990: {items: 1},
                    600: {items: 1}
                }
            });
        }

        /**
         * ==============================
         *  Blog Slider
         * ==============================
        */

        if (jQuery('.blog-slider').length > 0) {
            jQuery(".blog-slider").owlCarousel({
                dots: false,
                items: 1,
                loop: true,
                autoplay: true,
                nav: true,
                autoplayHoverPause: true,
                smartSpeed: 100,
                navText: [
                    "<i class='arrow_left'></i>",
                    "<i class='arrow_right'></i>"
                ]
            });
        }

        /**
         * ==============================
         *  Audio Player
         * ==============================
        */

        jQuery('.main-player').each(function () {

            function arrayShuffle(o) {
                for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
                    ;
                return o;
            }

            var $this = $(this);
            var $list = $this.find('.main-player-list');
            var $content = $this.find('.main-player-song');
            var $loop = $this.find('.main-player-loop');
            var $shuffle = $this.find('.main-player-shuffle');
            var el = $this.find('audio').get(0);

            var init_volume = Math.min(1, Math.max(0, parseFloat($this.data('audioVolume'))));
            var is_shuffle = $this.data('audioShuffle') ? true : false;
            var is_loop = $this.data('audioLoop') ? true : false;
            var index = 0;
            var songs = [];
            var keys = [];
            $list.find('li').each(function () {
                var $li = $(this);
                var song = $li.data();
                if (!song.audio)
                    return;
                song.element = $li;
                var key = songs.push(song) - 1;
                keys.push(key);
                $li.data('audioIndex', key);
            });

            var shuffle = arrayShuffle(keys);

            function load(shift, autoplay, player) {

                index += shift;

                if (index >= songs.length) {
                    shuffle = arrayShuffle(keys);
                    index = 0;
                    if (!is_loop)
                        autoplay = false;
                } else if (index < 0) {
                    index = songs.length - 1;
                }

                var i = index;

                if (is_shuffle) {
                    i = shuffle[i];
                }

                player.load(songs[i].audio);
                if (autoplay) {
                    player.play();
                } else {
                    player.pause();
                }

                $list.find('.playing').removeClass('playing');

                songs[i].element.addClass('playing');

                $content.html(songs[i].element.html());
            }

            var player = audiojs.create(el, {
                autoplay: $this.data('audioAutoload') ? true : false,
                loop: false,
                preload: true,
                css: false,
                createPlayer: {
                    markup: false,
                    playPauseClass: 'main-player-play-pause',
                    scrubberClass: 'main-player-scrubber',
                    progressClass: 'main-player-progress',
                    loaderClass: 'main-player-loaded',
                    timeClass: 'main-player-time',
                    durationClass: 'main-player-duration',
                    playedClass: 'main-player-played',
                    errorMessageClass: 'main-player-error-message',
                    playingClass: 'main-player-playing',
                    loadingClass: 'main-player-loading',
                    errorClass: 'main-player-error'
                },
                trackEnded: function () {
                    load(1, true, this);
                }
            });

            if (init_volume)
                player.setVolume(init_volume);

            $this.data('audiojs', player);

            var volume = {
                wrapper: $this.find('.main-player-volume'),
                element: $this.find('.main-player-volume .main-player-vslider > div'),
                pos: $this.find('.main-player-volume .main-player-vslider b'),
                volume: player.element.volume,
                init: function () {
                    volume.element.on('click', volume.change);
                    volume.element.on('mousedown', volume.drag);

                    $this.on('click', '.main-player-volume-high, .main-player-volume-low', function () {
                        player.setVolume(0);
                        volume.update();
                    });

                    $this.on('click', '.main-player-volume-off', function () {
                        player.setVolume(volume.volume);
                        volume.update();
                    });

                    volume.update();
                },
                change: function (e) {
                    e.preventDefault();
                    var pos = volume.getFrac(e, $(this));
                    volume.update(pos * 100);
                    player.setVolume(pos);
                    volume.volume = pos;
                },
                update: function (percent) {
                    var v = typeof percent != 'undefined' ? percent : player.element.volume * 100;
                    volume.wrapper.toggleClass('off', v == 0);
                    volume.wrapper.toggleClass('half', v > 0 && v <= 50);
                    volume.pos.height(v + '%');
                },
                drag: function (e) {
                    e.preventDefault();
                    $(document).on('mousemove', volume.moveHandler);
                    $(document).on('mouseup', volume.stopHandler);
                    volume.wrapper.addClass('hover');
                },
                moveHandler: function (e) {
                    var pos = volume.getFrac(e, volume.element);
                    volume.update(pos * 100);
                    player.setVolume(pos);
                    volume.volume = pos;
                },
                stopHandler: function () {
                    $(document).off('mousemove', volume.moveHandler);
                    $(document).off('mouseup', volume.stopHandler);
                    volume.wrapper.removeClass('hover');
                },
                getFrac: function (e, $this) {
                    return 1 - Math.min(1, Math.max(0, (e.pageY - $this.offset().top) / $this.height()));
                }

            };

            volume.init();

            $this.on('click', '.main-player-list-button', function () {
                $list.toggleClass('opened');
            });

            $this.on('click', '.main-player-next', function () {
                load(1, true, player);
            });

            $this.on('click', '.main-player-prev', function () {
                load(-1, true, player);
            });

            $list.on('click', 'li', function () {
                var i = $(this).data('audioIndex');
                if (i !== null && i >= 0) {
                    index = i;
                    load(0, true, player);
                }
                $list.removeClass('opened');
            });

            $shuffle.toggleClass('off', !is_shuffle);
            $loop.toggleClass('off', !is_loop);

            $shuffle.click(function () {
                $shuffle.toggleClass('off');
                is_shuffle = !$shuffle.hasClass('off');
            });

            $loop.click(function () {
                $loop.toggleClass('off');
                is_loop = !$loop.hasClass('off');
            });

            load(0, player.settings.autoplay, player);
        });


        /**
         * ==============================
         *  Price Range
         * ==============================
        */

        var priceSliderRange = $('#slider-range');
        if ($.ui) {
            if ($(priceSliderRange).length) {
                $(priceSliderRange).slider({
                    range: true,
                    min: 0,
                    max: 500,
                    values: [16, 200],
                    slide: function (event, ui) {
                        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                    }
                });
                $("#amount").val(
                        "$" + $("#slider-range").slider("values", 0) +
                        " - $" + $("#slider-range").slider("values", 1)
                );
            }
        }

        /**
         * ==============================
         *  Pretty Photo Popup
         * ==============================
        */


        if (jQuery('.caption-link').length > 0) {
            jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
                theme: 'facebook',
                slideshow: 5000,
                autoplay_slideshow: true
            });
        }

        /**
         * ==============================
         *  Countdown
         * ==============================
        */

        if (jQuery('.countdown-wrapper').length > 0) {
            if ($().countdown) {
                var austDay = new Date();
                austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 25);
                $('#dealCountdown1').countdown({
                    until: austDay
                });
            }
        }

        /**
         * ==============================
         *  Google Map Contact
         * ==============================
        */

        if (typeof google === 'object' && typeof google.maps === 'object') {
            if (jQuery('#map-canvas2').length) {

                var map;
                var marker;
                var infowindow;
                var mapIWcontent = '' +
                        '' +
                        '<div class="map-info-window">' +
                        '<div class="map-location">' +
                        '<div class="loctn-img">' +
                        '<a class="media-link" href="#">' +
                        '<img class="img-responsive" src="assets/img/main/banner/map-location.jpg" alt=""/>' +
                        '</a>' +
                        '</div>' +
                        '<div class="loctn-info">' +
                        '<h4 class="title-2"> Location </h4>' +
                        '<p> 79 Orchard St,New York <br>NY 10002, USA </p>' +
                        '<p> (0096) 8645 234 438 </p>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '';
                var contentString = '' +
                        '' +
                        '<div class="iw-container">' +
                        '<div class="iw-content">' +
                        '' + mapIWcontent +
                        '</div>' +
                        '<div class="iw-bottom-gradient"></div>' +
                        '</div>' +
                        '' +
                        '';
                var image = 'assets/img/main/logo/map-icon.png'; // marker icon
                google.maps.event.addDomListener(window, 'load', function () {
                    var mapOptions = {
                        scrollwheel: false,
                        zoom: 10,
                        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},
                        {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},
                        {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},
                        {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},
                        {"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
                        {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
                        {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},
                        {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},
                        {"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},
                        {"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},
                        {"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                        {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},
                        {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},
                        {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
                        center: new google.maps.LatLng(40.6700, -73.9400) // map coordinates
                    };

                    map = new google.maps.Map(document.getElementById('map-canvas2'),
                            mapOptions);
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(40.6700, -73.9400), // marker coordinates
                        map: map,
                        icon: image,
                        title: 'Hello World!'
                    });
                });
            }
        }

        /**
         * ==============================
         * Our Blog slider.
         * Used in the Homepage
         * ==============================
        */

            if (jQuery('.our-blog-slider').length > 0) {
                jQuery(".our-blog-slider").owlCarousel({
                    dots: false,
                    loop: true,
                    autoplay: false,
                    margin: 10,
                    autoplayHoverPause: true,
                    smartSpeed: 100,
                    responsive: {
                        0: {items: 1},
                        1200: {items: 2},
                        990: {items: 2},
                        600: {items: 2},
                        480: {items: 1}
                    }
                });
            }


        /**
         * ==============================
         *  Google Map Contact 2
         * ==============================
        */


        if (typeof google === 'object' && typeof google.maps === 'object') {
            if (jQuery('#map-canvas-homepage').length) {

                var map;
                var marker;
                var infowindow;
                var mapIWcontent = '' +
                        '' +
                        '<div class="map-info-window">' +
                        '<div class="map-location">' +
                        '<div class="loctn-img">' +
                        '<a class="media-link" href="#">' +
                        '<img class="img-responsive" src="assets/img/main/banner/map-location.jpg" alt=""/>' +
                        '</a>' +
                        '</div>' +
                        '<div class="loctn-info">' +
                        '<h4 class="title-2"> Location </h4>' +
                        '<p> 79 Orchard St,New York <br>NY 10002, USA </p>' +
                        '<p> (0096) 8645 234 438 </p>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '';
                var contentString = '' +
                        '' +
                        '<div class="iw-container">' +
                        '<div class="iw-content">' +
                        '' + mapIWcontent +
                        '</div>' +
                        '<div class="iw-bottom-gradient"></div>' +
                        '</div>' +
                        '' +
                        '';
                var image = 'assets/img/map-icon.png'; // marker icon
                google.maps.event.addDomListener(window, 'load', function () {
                    var mapOptions = {
                        scrollwheel: false,
                        zoom: 10,
                        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},
                        {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},
                        {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},
                        {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},
                        {"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
                        {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
                        {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},
                        {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},
                        {"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},
                        {"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},
                        {"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                        {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},
                        {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},
                        {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],

                        center: new google.maps.LatLng(40.6700, -73.9400) // < Change Map Address
                    };

                    map = new google.maps.Map(document.getElementById('map-canvas-homepage'),
                            mapOptions);
                    marker = new google.maps.Marker({
                       position: new google.maps.LatLng(40.6700, -73.9400), // < Change Marker Map Address
                        map: map,
                        icon: image,
                        title: 'Hello World!'
                    });


                });

            }
        }


        /**
        * ==============================
        *  Slider Product
        *  Resize carousels in modal
        * ==============================
        */

        jQuery(document).on('shown.bs.modal', function () {
            jQuery(this).find('.sync1, .sync2').each(function () {
                jQuery(this).data('owlCarousel') ? jQuery(this).data('owlCarousel').onResize() : null;
            });
        });

        var sync1 = jQuery(".sync1");
        var sync2 = jQuery(".sync2");
        var sync3 = jQuery(".style-5.sync1");
        var sync4 = jQuery(".style-5.sync2");
        var navSpeedThumbs = 500;

        sync4.owlCarousel({
            rtl: false,
            items: 4,
            nav: false,
            navSpeed: navSpeedThumbs,
            responsive: {
                992: {items: 4},
                767: {items: 5},
                600: {items: 4}
            },
            responsiveRefreshRate: 200
        });

        sync3.owlCarousel({
            rtl: false,
            items: 1,
            navSpeed: 1000,
            nav: true,
            onChanged: syncPosition,
            responsiveRefreshRate: 200,
            navText: [
                "<span class='nav-prev'>Prev</span>",
                "<span class='nav-next'>Next</span>"
            ]
        });


        sync2.owlCarousel({
            rtl: false,
            items: 4,
            nav: true,
            navSpeed: navSpeedThumbs,
            responsive: {
                992: {items: 4},
                767: {items: 5},
                600: {items: 4}
            },
            responsiveRefreshRate: 200,
            navText: [
                "<i class='arrow_carrot-left'></i>",
                "<i class='arrow_carrot-right'></i>"
            ]
        });

        sync1.owlCarousel({
            rtl: false,
            items: 1,
            navSpeed: 1000,
            nav: false,
            onChanged: syncPosition,
            responsiveRefreshRate: 200

        });


        function syncPosition(el) {
            var current = this._current;
            jQuery(".sync2")
                    .find(".owl-item")
                    .removeClass("synced")
                    .eq(current)
                    .addClass("synced");
            center(current);
        }

        jQuery(".sync2").on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = jQuery(this).index();
            sync1.trigger("to.owl.carousel", [number, 1000]);
        });

        function center(num) {

            var sync2visible = sync2.find('.owl-item.active').map(function () {
                return jQuery(this).index();
            });

            if (jQuery.inArray(num, sync2visible) === -1) {
                if (num > sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("to.owl.carousel", [num - sync2visible.length + 2, navSpeedThumbs, true]);
                } else {
                    sync2.trigger("to.owl.carousel", Math.max(0, num - 1));
                }
            } else if (num === sync2visible[sync2visible.length - 1]) {
                sync2.trigger("to.owl.carousel", [sync2visible[1], navSpeedThumbs, true]);
            } else if (num === sync2visible[0]) {
                sync2.trigger("to.owl.carousel", [Math.max(0, num - 1), navSpeedThumbs, true]);
            }
        }

    });


});
