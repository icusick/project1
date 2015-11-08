console.log('linked');

var $start = $('.start');
var $topLeft = $('.top-left');
var $topRight = $('.top-right');
var $bottomLeft = $('.bottom-left');
var $bottomRight = $('.bottom-right');
var playerArray = [];
var $colorArray = [$topLeft, $topRight, $bottomLeft, $bottomRight];
var $computerArray = [$topLeft, $topRight, $bottomLeft, $bottomRight];
pointCounter = 1;
// var i = 0;






	var flash = function($target) {
		var flashIt = function() {
			$target.addClass('hidden');
			
			setTimeout(function() { $target.removeClass('hidden') }, 200);
			playerArray.push($target);
		};
		return flashIt;
	};




	var flashComputer = function() {
			
			// lines 23-25 need to happen to each element in computerArray. computerArray needs to be an array of randomly selected elements from colorArray
			
				if (event.keyCode === 13) {
					for (var i = 0; i < $computerArray.length; i++) {
						setTimeout(hide($computerArray[i]), (i+1)*400);
						setTimeout(reappear($computerArray[i]), (i+1)*800);
					}

				}
				iDontEvenKnowAnymore();

	};
			
		
		
	// };
	var iDontEvenKnowAnymore = function () {
		if (playerArray === $computerArray) {
			pointCounter++;
			$points.text("Points: " + pointCounter);
			$computerArray.push(_.sample($colorArray))
		} else {
			playerArray.length = 0;
		}
	};
    

// computerArray needs to randomly select a certain number of elements from  

	var hide = function(arrayEl) {
		var fuckingClosure = function(){
			arrayEl.addClass('hidden');
		}
		return fuckingClosure;
	}
	var reappear = function(arrayEl) {
		var fuckingClosure = function(){
			arrayEl.removeClass('hidden');
		}
		return fuckingClosure;
	}


$(document).ready(function() {


$start = $('.start');
$topLeft = $('.top-left');
$topRight = $('.top-right');
$bottomLeft = $('.bottom-left');
$bottomRight = $('.bottom-right');
$points = $('.points');
$html = $('html');





// $topLeft.on('click', flashTwo);
// $topRight.on('click', flashTwo);
// $bottomRight.on('click', flashTwo);
// $bottomLeft.on('click', flashTwo);

$start.on('click', function() {
	console.log('event listeners added')
	$topLeft.on('click', flash($topLeft));
	$topRight.on('click', flash($topRight));
	$bottomRight.on('click', flash($bottomRight));
	$bottomLeft.on('click', flash($bottomLeft));
	$html.on('keypress', flashComputer);
});





});






















