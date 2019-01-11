$(document).ready(function () {
    // show-aside
		$(".aside").hide();
    $(".aside").show();


    $('.show-aside').click(function () {
        $(".aside").toggle("slide");
    });

    $('.close-button').click(function () {
        $(".aside").toggle("slide");
    });

		//adaptive-menu
		$(function(){

    $('.ham').on('click', function() {
       $('.menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

	});

});
