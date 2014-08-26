/*
 █████╗ ██████╗ ██████╗ 
██╔══██╗██╔══██╗██╔══██╗
███████║██████╔╝██████╔╝
██╔══██║██╔═══╝ ██╔═══╝ 
██║  ██║██║     ██║     
╚═╝  ╚═╝╚═╝     ╚═╝
*/
@import 'vendor/jquery.js';
//@import 'vendor/imagesloaded.js';
//@import 'vendor/skrollr.js';
@import 'vendor/foundation/foundation.js';
@import 'vendor/classie.min.js';
@import 'vendor/photostack.js';
@import 'vendor/waypoints.js';

//@import 'vendor/foundation/foundation.orbit.js';
var animateTeamItem = function(){
  
}

$(document).ready(function(e){
  $('#team .item').click(function(e){
    $(this).addClass('animated fadeInUp');
    $('#team .item').not($(this)).addClass('animated fadeOutUp');

    //$(this).addClass('centerBlockFixed');
    $(this).animate('width','100%');
    $(this).find('.info').addClass('centerBlockFixed').addClass('animated fadeInUp').fadeIn(300);
   
  });
  /*//Team animation onClick/**
  $('#team .item').click(function(e){
    $(this).addClass('animated fadeInUp');
    $('#team .item').not($(this)).addClass('animated fadeOutUp');

    $(this).addClass('centerBlockFixed');
    $(this).find('.info').addClass('animated fadeInUp').fadeIn(300);
   
  });
 $('#team .item .close').on('click', function(e){
    
      $('.item').removeClass('centerBlockFixed');
      $('.info').addClass('fadeOutUp');
      
    });**/
  //Check if images finished loading
  $('.photostack img').load(function(){
    
    new Photostack( document.getElementById( 'photostack-1' ), {
            callback : function( item ) {
              //console.log(item)
            }
          } );
    
  });
  
  animateTeamItem();
  $(document).foundation();
  var offset;
  $('.animated').waypoint(function() {
    $(this).toggleClass($(this).data('animated'));
    
  },
  { offset: $(window).height()-200 });
  
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