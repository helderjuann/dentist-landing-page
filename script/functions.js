$(function() {

    menuMobile();

    function menuMobile() {
        $('body').on('click','.menu-mobile', function(e) {
            e.stopPropagation();
            $(this).find('ul').slideToggle();
        });

        $('body').on('click', function(e) {
            e.stopPropagation();
            $('.menu-mobile').find('ul').slideUp('open');
        });
    }

    desktopScroll();

    function desktopScroll() {
        $('#contact').click(function() {
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 1000);
            return false;
        });
    }

    mobileScroll();

    function mobileScroll() {
        $('#mobile-contact').click(function() {
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 1000);
            return false;
        });
    }

});