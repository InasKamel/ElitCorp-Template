(function() {
    'use strict';

    //featured work section
    $('.featured-work ul li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        if ( $(this).data('class') !== undefined ){
            $('.shuffle-images .col-md-3').css('opacity', '.1');
            $($(this).data('class')).parent().css('opacity', '1');
        } else {
            $('.shuffle-images .col-md-3').css('opacity', '1');
        }
    });
})();