console.log('linked');

var $start = $('.start');
var $topLeft = $('.top-left');
var $topRight = $('.top-right');
var $bottomLeft = $('.bottom-left');
var $bottomRight = $('.bottom-right');
var playerArray = [];
var $colorArray = [$topLeft, $topRight, $bottomLeft, $bottomRight];
var $computerArray = _.shuffle($colorArray);
var $checker = $('.checker');
pointCounter = 0;
// var i = 0;






	var flash = function($target) {
		var flashIt = function() {
			$target.addClass('hidden');
			
			setTimeout(function() { $target.removeClass('hidden') }, 200);
			playerArray.push($target);
			// if (event.keyCode === 13) {
			// 	didYouGetItRight();
		};
		return flashIt;
		// didYouGetItRight();
		
	};




	var flashComputer = function() {
			
	// 		// lines 23-25 need to happen to each element in computerArray. computerArray needs to be an array of randomly selected elements from colorArray. lines 40-41 were JULIA PEARSON'S IDEA.
			
				// if (event.keyCode === 13) {
					for (var i = 0; i < $computerArray.length; i++) {
						setTimeout(hide($computerArray[i]), (i+1)*400);
						// setTimeout(reappear($computerArray[i]), (i+1)*400);
					// }

				}
				// do the karaoke thing here!!!!! 
				// 	var i = 0
				// var flashTheComputer = function() {
				// 	if (i<computerArray.length) {
				// 	computerArray[i].addClass('hidden')
				// 	setTimeout(function() { $target.removeClass('hidden') }, 200);
				// 	i++;
				// 	} else {
				// 		clearInterval(flashTheComputer);
				// 	}
				// }
				// setInterval(flashTheComputer, 500);
				

	};
			
		
		
	var gameOver = function () {
		pointCounter = 0
		$points.text("Points: ");
		playerArray.length = 0;
		$computerArray.length = 4;
		_.shuffle($computerArray);
		
	}
	
	var didYouGetItRight = function () {
		for (var x = 0; x < 10; x++) {
			var truth = $computerArray[x] === playerArray[x]
		}
		if ((playerArray.length === $computerArray.length) && truth) {
			console.log('right');
			pointCounter  += 1;
			$points.text("Points: " + pointCounter);
			window.alert("Yes!");
			$computerArray.push(_.sample($colorArray))
			playerArray.length = 0;
		} else {
			console.log('wrong');
			playerArray.length = 0;
			window.alert("No!");
		}
		flashComputer();
	};


// computerArray needs to randomly select a certain number of elements from  
// julia pearson: helped me with closures and also 
	var hide = function(arrayEl) {
		var fuckingClosure = function(){
			
			arrayEl.addClass('hidden');
			setTimeout(reappear(arrayEl), 200);
		}

		return fuckingClosure;
	}
	var reappear = function(arrayEl) {
		var fuckingClosure = function(){
			arrayEl.removeClass('hidden');
		}
		return fuckingClosure;
	}

	var restart = function() {
		console.log('shuffle');
		$computerArray = _.shuffle([$topLeft, $topRight, $bottomLeft, $bottomRight]);
	};

$(document).ready(function() {


$play = $('.play');
$start = $('.start');
$topLeft = $('.top-left');
$topRight = $('.top-right');
$bottomLeft = $('.bottom-left');
$bottomRight = $('.bottom-right');
$points = $('.points');
$html = $('html');
$checker = $('.checker');
$restart= $('.restart');





// $topLeft.on('click', flashTwo);
// $topRight.on('click', flashTwo);
// $bottomRight.on('click', flashTwo);
// $bottomLeft.on('click', flashTwo);

$start.on('click', function() {
	window.alert("To play this game press enter and note which colors are flashed. You have to click the colors in the order that they were flashed to you. Press the Did I get it right? button in order to see if you got it right. If you did, you will earn one point. If not, try again. When you've gotten it right, press enter again. This time there will be one more color added to the sequence.")
	console.log('event listeners added')
	$topLeft.on('click', flash($topLeft));
	$topRight.on('click', flash($topRight));
	$bottomRight.on('click', flash($bottomRight));
	$bottomLeft.on('click', flash($bottomLeft));
	$html.on('keypress', didYouGetItRight);
	// $checker.on('click', didYouGetItRight);
	$restart.on('click', gameOver);
	$play.on('click', flashComputer)
});





});






















