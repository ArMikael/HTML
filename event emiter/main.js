/*
Event emitter ex.

Wire up event listeners and emitters to win the game
Use the cross browser `emitEvent` method from UTILS

1. Arrow up and down should increment/decrement the timer
	- Use `tickUp` and `tickDown`
2. At 10 or 0, the ball should drop
	- Use `isTimerDone` to check if it's done
	- Use `dropBall` to animate the ball drop, accepts callback
3. When the ball reaches the ground, show the success message
	- Use `showAwesome` to show the message

Restrictions:
- Do not touch the HTML/CSS
- Do not change the existing JS (see comment below)

*/

(function () {
	var arrows = document.querySelectorAll('.arrow'),
		timerTime = document.querySelector('.timer .time'),
		ball = document.querySelector('.ball'),
		grass = document.querySelector('.grass'),
		awesome = document.querySelector('.awesome');

	//------------------------------------------------------
	// Wire up event listeners to make the game work
	//------------------------------------------------------
	function init() {
		console.log('init');

		var checkArrow = function(e) {
			if ( e.target.className === 'arrow up' ) {
				tickUp();

			} else {
				tickDown();
			}
		};

		for (var i = 0; i < arrows.length; i++) {
			UTILS.addEvent(arrows[i], 'click', checkArrow);
			UTILS.addEvent(arrows[i], 'click', isTimerDone);
		}



	}

	if ( isTimerDone() ) {
		for ( var i = 0; i < arrows.length; i++ ) {
			UTILS.removeEvent(arrows[i], 'click', checkArrow);

		}

		dropBall();
	} else {
		console.log(isTimerDone());
	}

	//------------------------------------------------------
	// Do not touch the code below
	//------------------------------------------------------

	// Tick timer up by 1
	function tickUp(e) {
		console.log('Ticking up');
		timerTime.textContent++;
	}

	// Tick timer down by 1
	function tickDown(e) {
		console.log('Ticking down');
		timerTime.textContent--;
	}

	// Is timer done (at `10` or `0`)
	function isTimerDone(e) {
		// console.log('Timer is done');
		var time = Number(timerTime.textContent);
		console.log(time);
		return (time === 10 || time === 0) ? true : false;
	}

	// Animate the drop of the ball
	// Call the callback when done
	function dropBall(callback) {
		var ballHitGrass = false;

		for (var i = 0; i < 27 ; i++) {
			(function (index) {
				setTimeout(function() {
					ball.style.top = (ball.offsetTop + 10) + 'px';

					if ((ball.offsetHeight + ball.offsetTop) >= grass.offsetTop) {
						if (!ballHitGrass) {
							console.log('Ball dropped');
							ballHitGrass = true;
							callback();
						}
					}
				}, index * 16.7);
			})(i);
		}
	}

	// Show success message
	function showAwesome() {
		console.log('Ball hit the grass. Awesome!');
		awesome.className = 'awesome active';
	}

	init();
})();
