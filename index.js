jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider .slider-ul li').length;
	var slideWidth = $('#slider .slider-ul li').width();
	var slideHeight = $('#slider .slider-ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider .slider-ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider slider-ul li:last-child').prependTo('#slider slider-ul');

    function moveLeft() {
        $('#slider .slider-ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider .slider-ul li:last-child').prependTo('#slider .slider-ul');
            $('#slider .slider-ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider .slider-ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider .slider-ul li:first-child').appendTo('#slider .slider-ul');
            $('#slider .slider-ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
