$(function(){
$(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 400);
            return false;
        });
});
jQuery(document).ready(function(){
     $(".flexy-menu").flexymenu({speed: 400, indicator: true, type: "horizontal",align: "left",});

				  
//$(function(){
//      SyntaxHighlighter.all();
//    });
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
});
	 /*$('.bxslider').bxSlider({
		  mode:'fade',
		  });	*/
     