console.log('linked');

var $topLeft;
var $topRight;
var $bottomLeft;
var $bottomRight;
var $playerArray = [];

// var unFlash = function() {
// 	// if ($event.css('visibility', 'hidden')) {
// 		$event.css('visibility', 'visible');
// 	// $event.removeClass('hidden')
// 	// }
// };

// var unFlashTimer = window.setTimeout(unFlash(), 1000);

var flash = function($event) {
	console.log('flash button clicked');
	// I THINK HERE IS WHERE I WANT TO CREATE A VARIABLE THAT SAVES THE PLACE WHERE THE CLICK HAPPENS AND PUSHES IT INTO AN ARRAY THAT CAN BE COMPARED TO THE COMPUTERS COLORARRAY BUT I DON'T KNOW HOW

	var flashIt = function() {
		var $clickedColor = $event.css('visibility', 'hidden');
		$playerArray.push($clickedColor);
		setTimeout(function() { $event.css('visibility', 'visible') }, 200);
	}
	return flashIt;
	
	
};

$(document).ready(function() {

$topLeft = $('.top-left');
$topRight = $('.top-right');
$bottomLeft = $('.bottom-left');
$bottomRight = $('.bottom-right');



// var unFlash = function() {
// 	$event.css('visibility', 'visible');
// };




$topLeft.on('click', flash($topLeft));
$topRight.on('click', flash($topRight));
$bottomRight.on('click', flash($bottomRight));
$bottomLeft.on('click', flash($bottomLeft));

// $topLeft.on('click', flash);
// $topRight.on('click', flash);
// $bottomRight.on('click', flash);
// $bottomLeft.on('click', flash);




});






















