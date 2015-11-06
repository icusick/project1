console.log('linked');

var $topLeft;
var $topRight;
var $bottomLeft;
var $bottomRight;
var $playerArray = [];
var $colorArray = [$topLeft, $topRight, $bottomLeft, $bottomRight];
var $computerArray;

var flash = function($event) {
	var flashIt = function() {
		var $clickedColor = $event.css('visibility', 'hidden');
		$playerArray.push($clickedColor.selector);
		setTimeout(function() { $event.css('visibility', 'visible') }, 200);
	};
	return flashIt;
};

var flashComputer = function($event) {
	var flashTheComputer = function() {
		// lines 23-25 need to happen to each element in computerArray. computerArray needs to be an array of randomly selected elements from colorArray
		$computerArray = colorArray.map(function(current, index)
			$colorArray.length += 1;
			index = Math.floor(Math.random() * 5)
			)
		$event.css('visibility', 'hidden');
		
		setTimeout(function() { $event.css('visibility', 'visible') }, 200);
	};
	return flashIt;
};
// computerArray needs to randomly select a certain number of elements from  

$(document).ready(function() {

$topLeft = $('.top-left');
$topRight = $('.top-right');
$bottomLeft = $('.bottom-left');
$bottomRight = $('.bottom-right');
$computerColor = 


$topLeft.on('click', flash($topLeft));
$topRight.on('click', flash($topRight));
$bottomRight.on('click', flash($bottomRight));
$bottomLeft.on('click', flash($bottomLeft));






});






















