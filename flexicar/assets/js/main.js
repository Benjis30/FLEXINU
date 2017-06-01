
   var length = $('#left-wrap').height() - $('.sidebar').height() + $('#left-wrap').offset().top;

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();
        var height = $('.sidebar').height() + 'px';

        if (scroll < $('#left-wrap').offset().top) {

            $('.sidebar').css({
                'position': 'absolute',
                'top': '0'
            });

        } else if (scroll > length) {

            $('.sidebar').css({
                'position': 'absolute',
                'bottom': '0',
                'top': 'auto'
            });

        } else {

            $('.sidebar').css({
                'position': 'fixed',
                'top': '0',
                'height': height
            });
        }
    });
