$(function() {
    $('#app').mouseover(() => {
        $(".box").show('fast');
    });
    $('#app').mouseout(() => {
        $(".box").hide('fast');
    });


    $('.cart-mini').mouseover(() => {
        $("#menu").show('fast');
        $('.cart-mini').css({"background-color":"white", "color":"#ff6700"});
    });

    $('.cart-mini').mouseout(() => {
        $("#menu").hide('fast');
        $('.cart-mini').css({"background-color":"#333", "color":"#b0b0b0"});
    });
    





});