(function ($) {

    /**
     * Add javascript functionality to the search menu.
     */
    Drupal.behaviors.gsb_search_box = {
        attach: function () {
            $('#navigation').addClass('search-closed');
            $('#page').addClass('modal-closed');

            $('.global-search input[type="submit"]').click(function (e) {
                if ($('#navigation').hasClass('search-closed')) {
                    $('#navigation').removeClass('search-closed');
                    $('#navigation').addClass('search-open');
                    $('.global-search input[name="search_keys"]').focus();
                    if ($('#page').hasClass('modal-closed')) {
                        $('#page').removeClass('modal-closed');
                        $('#page').addClass('modal-open');
                        $('.global-search input[name="search_keys"]').focus();
                        e.preventDefault();
                    }
                    e.preventDefault();
                }

            });
            $('#search-close').click(function (e) {
                $('#page').removeClass('modal-open').addClass('modal-closed')
            });

            $(document).keydown(function (event) {
                if (event.keyCode == 27) {
                    $('#page').removeClass('modal-open');
                    $('#navigation').removeClass('search-open');
                }
            });
        }
    };

}(jQuery));
