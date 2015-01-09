// Global UTILS

(function () {
	var iframes = document.querySelector('iframe'),
	links = document.querySelectorAll('a'),
	linkHandler;

	linkHandler = function (e) {
		var target = e.target,
			url = target.href;

		e.preventDefault();

		iframe.src = url;
	}

	for ( var i = 0; i < links.length; i++ ) {
		// if ( document.addEventListener ) {
			links[i].addEventListener('click', linkHandler);
		// } else {

		// }
	}

})();
