console.log('linked');

var $topLeft = $('.top-left');
var $topRight = $('.top-right');
var $bottomLeft = $('.bottom-left');
var $bottomRight = $('.bottom-right');
var playerArray = [];
var $colorArray = [$topLeft, $topRight, $bottomLeft, $bottomRight];
var $computerArray = $colorArray;

var flash = function($target) {
	var flashIt = function() {
		$target.css('visibility', 'hidden');
		
		setTimeout(function() { $target.css('visibility', 'visible') }, 200);
		playerArray.push($target.selector);
	};
	return flashIt;
};

// var flashTwo = function(event) {
// 	var target = event.target;
// 	target.style.visibility = 'hidden';
	
// 	setTimeout(function() { 
// 		target.style.visibility = 'visible'; 
// 	}, 200);
// 	playerArray.push(target.selector);
// };

var flashComputer = function($event) {
	var flashTheComputer = function() {
		// lines 23-25 need to happen to each element in computerArray. computerArray needs to be an array of randomly selected elements from colorArray
		if (points === 1) {
			$computerArray.push(_.sample($colorArray));
			for (var i = 0; i < $computerArray.length; i++) {
				$computerArray.eq(i).css('visibility', 'hidden');
				setTimeout(function() { $computerArray.eq(i).css('visibility', 'visible') }, 200);
			}
			if ($computerArray === playerArray) {
				points++
				points.text = points;
			} else {
				$playerArray.length = 0;
			}
		}
	};
	return flashIt;
};
// computerArray needs to randomly select a certain number of elements from  

$(document).ready(function() {

$topLeft = $('.top-left');
$topRight = $('.top-right');
$bottomLeft = $('.bottom-left');
$bottomRight = $('.bottom-right');


$topLeft.on('click', flash($topLeft));
$topRight.on('click', flash($topRight));
$bottomRight.on('click', flash($bottomRight));
$bottomLeft.on('click', flash($bottomLeft));

// $topLeft.on('click', flashTwo);
// $topRight.on('click', flashTwo);
// $bottomRight.on('click', flashTwo);
// $bottomLeft.on('click', flashTwo);




});






















