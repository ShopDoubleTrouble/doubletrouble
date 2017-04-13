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


    });


    /**
     * ==============================
     * You Tube Video         
     * ==============================
    */

    var player;

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
            player.playVideo();
            jQuery('.yt-video').css({opacity: '1'});
            jQuery('#play-button').css({opacity: '0'});
        });
    }
    // Inject YouTube API script
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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

    jQuery(function (jQuery) {


        jQuery(window).load(function () {
        if (jQuery(".header-wrap").length) {
            jQuery(".header-wrap").mCustomScrollbar({
                theme: "dark-2",
                scrollButtons: {
                    enable: false
                }
            });
        }
    });


    /**
     * ==============================
     * Remove Active Class       
     * ==============================
    */
    
        jQuery(document).click(function (e) {
            var active = e.target ? jQuery(e.target).closest('.active').get(0) : null;
            jQuery(".header-wrap").removeClass('off-canvas');
            // jQuery(".toggle-icon").removeClass('off-canvas-body');
            jQuery(".top-elements li" + ",.nav-trigger").filter(function () {
                return !active || active !== this;
            }).removeClass('active');
            
        });

    /**
     * ==============================
     * Scroll To Top Animate
     * ==============================
    */
    
        jQuery('.to-top').click(function () {
            jQuery('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
    

    /**
     * ==============================
     *  Header Off Canvas Add     
     * ==============================
    */
    
         jQuery(".nav-trigger").on("click", function (e) {
            e.stopPropagation();
            jQuery(".header-wrap").toggleClass("off-canvas");
            jQuery(".nav-trigger").toggleClass("off-canvas");
        });



    /**
     * ==============================
     * Product Thumbnails Hover     
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
     * Subscribe Popup       
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
     * Revolution Slider      
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
     * Sticky Header      
     * ==============================
    */
    
        if (jQuery(window).width() > 767) {
                
            jQuery(".main-header").sticky({ topSpacing: 0 });
            jQuery(window).scroll(function(e) {
                var scrollTopDistance = jQuery(document).scrollTop();

                if( scrollTopDistance > 0 ) {
                    jQuery(".header-topbar").css({ padding: 0 });
                } else {
                    jQuery(".header-topbar").removeAttr("style");
                }
            });
            
        }
    
    /**
     * ==============================
     * Product Slider        
     * ==============================
    */
    
        if (jQuery('.our-prod-slider').length > 0) {
            jQuery(".our-prod-slider").owlCarousel({
                dots: false,
                loop: true,
                autoplay: true,
                margin: 10,
                autoplayHoverPause: true,
                smartSpeed: 100,
                responsive: {
                    0: {items: 1},
                    1200: {items: 5},
                    760: {items: 3},
                    565: {items: 2},
                    380: {items: 1}
                }
            });
        }
    
    /**
     * ==============================
     * Related Product Slider      
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
     * Google Map       
     * ==============================
    */
    
        if (typeof google === 'object' && typeof google.maps === 'object') {
            if (jQuery('#map-canvas').length) {

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
        
                        center: new google.maps.LatLng(40.6700, -73.9400) // < Change Map Address
                    };

                    map = new google.maps.Map(document.getElementById('map-canvas'),
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
    });
});



