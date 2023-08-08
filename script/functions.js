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

    scrollPage(); 

    function scrollPage() {
        $('nav a').click(function(){
            var href = $(this).attr('href');
            var offSetTop = $(href).offset().top;
    
            $('html, body').animate({'scrollTop':offSetTop});
            return false;
        });
    }

});