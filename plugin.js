$(function($){
    $(document).ready(function () {
        $('.Gallery .elemnt img').on('click', function () {
            $(this).clone().appendTo('.holder');
        });
    })

    $(document).ready(function () {
        $('.reset').on('click', function () {
            $('.holder img').remove();
        });
    });
});
 (jQuery);




