console.log('linked');

var $topLeft;
var $topRight;
var $bottomLeft;
var $bottomRight;
var $playerArray = [];
var $computerArray = [$topLeft, $topRight, $bottomLeft, $bottomRight];

var flash = function($event) {
	var flashIt = function() {
		var $clickedColor = $event.css('visibility', 'hidden');
		$playerArray.push($clickedColor.selector);
		setTimeout(function() { $event.css('visibility', 'visible') }, 200);
	};
	return flashIt;
};

$(document).ready(function() {

$topLeft = $('.top-left');
$topRight = $('.top-right');
$bottomLeft = $('.bottom-left');
$bottomRight = $('.bottom-right');


$topLeft.on('click', flash($topLeft));
$topRight.on('click', flash($topRight));
$bottomRight.on('click', flash($bottomRight));
$bottomLeft.on('click', flash($bottomLeft));






});






















