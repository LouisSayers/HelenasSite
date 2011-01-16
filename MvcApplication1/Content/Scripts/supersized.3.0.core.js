/*
Supersized - Fullscreen Slideshow jQuery Plugin
Version 3.0 - Core
By Sam Dunn (www.buildinternet.com // www.onemightyroar.com)
Version: supersized.3.0.js
Website: www.buildinternet.com/project/supersized
*/

(function ($) {

    //Resize image on ready or resize
    $.fn.supersized = function () {

        var options = $.extend($.fn.supersized.defaults, $.fn.supersized.options);
        $.currentSlide = 0;

        //Set current image
        $("<img/>").attr("src", options.slides[$.currentSlide].image).appendTo("#supersized");

        $(window).bind("load", function () {

            $('#loading').hide();
            $('#supersized').fadeIn('fast');

            $('#supersized').resizenow();

        });

        $(document).ready(function () {
            $('#supersized').resizenow();
        });


        $(window).bind("resize", function () {
            $('#supersized').resizenow();
        });

        $('#supersized').hide();
    };

    //Adjust image size
    $.fn.resizenow = function () {
        var t = $(this);
        var options = $.extend($.fn.supersized.defaults, $.fn.supersized.options);
        return t.each(function () {

            //Define image ratio
            var ratio = options.startheight / options.startwidth;

            //Gather browser and current image size
            var imagewidth = t.width();
            var imageheight = t.height();
            var browserwidth = $(window).width();
            var browserheight = $(window).height();

            //Resize image to proper ratio
            t.height(browserheight - options.vertical_offset);
            t.css('margin-top', options.vertical_offset);
            t.width(browserwidth);
            if ((browserheight / browserwidth) > ratio) {
                t.children().height(browserheight);
                t.children().width(browserheight / ratio);
            } else {
                t.children().width(browserwidth);
                t.children().height(browserwidth * ratio);
            }
            if (options.vertical_center == 1) {
                t.children().css('left', (browserwidth - t.width()) / 2);
                t.children().css('top', (browserheight - t.height()) / 2);
            }
            return false;
        });
    };

    $.fn.supersized.defaults = {
        startwidth: 4,
        startheight: 3,
        vertical_center: 1,
        vertical_offset: 0,
    };

})(jQuery);

