var re = new RegExp('(' + arr[0] + '|' + arr[1] + ')', 'gi');

return str.replace(re, function(match) {
	return 'that';
});
