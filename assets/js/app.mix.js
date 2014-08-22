@import 'vendor/jquery.js';
//@import 'vendor/skrollr.js';
@import 'vendor/foundation/foundation.js';
@import 'vendor/foundation/foundation.orbit.js';
@import 'vendor/waypoints.js';

$(document).ready(function(e){

	var offset;
	$('.animated').waypoint(function() {
		$(this).toggleClass($(this).data('animated'));
		
	},
	{ offset: $(window).height()-200 });
	$(document).foundation();
	//Adding click to scroll functionality
	$(".scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest-64}, 1000,'swing');
     });
});