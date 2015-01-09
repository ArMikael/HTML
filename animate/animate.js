// var h1 = document.querySelector('h1'),
// 	speed = 1000,
// 	currTop = window.getComputedStyle(h1).top,
// 	desTop = 100,
// 	range = desTop - parseInt(currTop, 10),
// 	stepDur = speed / range;

// function move() {
// 	var curr = parseInt(window.getComputedStyle(h1).top, 10);

// 	if (curr === desTop) {
// 		return;
// 	}

// 	h1.style.top = (curr + 1) + 'px';

// 	setTimeout(move, stepDur);
// }

// move();


/*
Ex. JS Animations

Dependency: UTILS (loaded in this Pen)
http://codepen.io/netcraft/pen/RNwPaa.js

Make boxA and boxB do a full round trip around all stations,
getting back to their initial place at the end.

- `animate` should run a smooth animation to the desired destination
- `animateSequence` should run a sequence of animations one after the other

Restrictions:
- Do not touch the HTML, CSS and JS below the relevant comment
*/

/* globals UTILS */
(function () {
	var boxes = UTILS.qsa('.box'),
		boxA = UTILS.qs('#boxA'),
		boxB = UTILS.qs('#boxB'),
		btn = UTILS.qs('#btn'),
		moveRightCss = {left: '100%', marginLeft: '-210px'},
		moveLeftCss = {left: '0%', marginLeft: '10px'},
		moveTopCss = {top: '0%', marginTop: '10px'},
		moveBottomCss = {top: '100%', marginTop: '-210px'},
		animate,
		animateSequence;

	//----------------------------------------------
	// Make `animate` and `animateSequence` work
	//----------------------------------------------

	/**
	 * Build a function to animate CSS styles
	 *
	 * @param  {Object}   elm      Node elm
	 * @param  {Object}   css      CSS rules object
	 * @param  {number}   speed    Animation duration
	 * @param  {Function} callback Callback to execute when done
	 */
	animate = function (elm, css, speed, callback) {
		console.log(elm);
		console.log(css);
		console.log(elm + css + speed + callback);

		if (typeof css.left !== 'undefined') {
			elm.style.left = css.left;
			elm.style.marginLeft = css.marginLeft;
		} else {
			elm.style.top = css.top;
			elm.style.marginTop = css.marginTop;
		}

		return callback;
	};

	/**
	 * Handle a sequence of animations using `animate`
	 *
	 * @param  {Object} elm      Node elm
	 * @param  {Array}  settings Array of settings object
	 */
	animateSequence = function (elm, settings) {
		// console.log('Hello from sequence!');
		animate(elm, settings[0].css, settings[0].speed, function() {
			animate(elm, settings[1].css, settings[1].speed, function() {

			}
		}
	};



	//----------------------------------------------
	// Do not touch the code below
	//----------------------------------------------

	// When the "Go!" button is clicked
	UTILS.addEvent(btn, 'click', function (e) {
		// Animtae boxA
		animateSequence(boxA, [
			{css: moveRightCss, speed: 1000},
			{css: moveBottomCss, speed: 500},
			{css: moveLeftCss, speed: 250},
			{css: moveTopCss, speed: 100},
		]);

		// Animtae boxB
		animateSequence(boxB, [
			{css: moveLeftCss, speed: 1000},
			{css: moveTopCss, speed: 500},
			{css: moveRightCss, speed: 250},
			{css: moveBottomCss, speed: 100},
		]);
	});

	// Just for testing
	[].forEach.call(boxes, function (elm, i, arr) {
		UTILS.addEvent(elm, 'click', function (e) {
			var className = e.target.className;

			e.target.className = className.replace(/(left|right)/, function (match) {
				return match === 'left' ? 'right' : 'left';
			});
		});
	});
}());
