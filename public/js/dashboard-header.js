(function ($) {

    $('body').on('click', '#left-side-navbarCollapse', function () {
        console.log('test');
        $('#left-side-navbar').toggleClass('active');
        $('#main-content').toggleClass('active');

        if ($(window).width() <= 768) {

            if ($('#left-side-navbar').hasClass('active')) {
                $('#toggle-recent-activity').show();
            } else {
                $('#toggle-recent-activity').hide();
            }
        }

    });

    $('body').on('click', '#toggle-recent-activity', function () {
        $('#show-recent-activity').toggleClass('active');
        $('.show-recent-activity-dashboard').toggleClass('active');
        $('#dashboard-footer-id').toggleClass('active');
    });

})(jQuery);