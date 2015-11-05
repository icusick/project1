console.log('linked');

$(document).ready(function() {

var $topLeft = $('.top-left');
var $topRight = $('.top-right');
var $bottomLeft = $('.bottom-left');
var $bottomRight = $('.bottom-right');



// var removeFlash = function() {
// 	if ($button.hasClass('flash')) {
// 		$button.removeClass('flash');
// 	};
// };

var flash = function($event) {
	console.log('flash button clicked')
	// $target = event.target;
	$event.css('visibility', 'hidden');
	//need to set a timeout that will remove it after 1 second
	// setTimeout(removeFlash, 2000);
};

$topLeft.on('click', flash);
$topRight.on('click', flash);
$bottomRight.on('click', flash);
$bottomLeft.on('click', flash);




});






















