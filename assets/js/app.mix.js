@import 'vendor/jquery.js';
//@import 'vendor/skrollr.js';
@import 'vendor/foundation/foundation.js';
@import 'vendor/foundation/foundation.orbit.js';
@import 'vendor/waypoints.js';

$(document).ready(function(e){
	//Animate from top
	//Animate from top
$('.animated').waypoint(function() {
	$(this).toggleClass($(this).data('animated'));
},
{ offset: 70 });
	/** 
	//Animate from bottom
	$('.animated').waypoint(function() {
		$(this).toggleClass($(this).data('animated'));
	},
	{ offset: 'bottom-in-view' });
	**/
	//var s = skrollr.init();
	$(document).foundation();
});