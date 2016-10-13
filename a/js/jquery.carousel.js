(function($){


	$.fn.carousel = function(options){

		var defaults = {
			colorButton: "linear-gradient(#3b2751, #271739)",
			colorHiden: "#fff",
			width: "540px",
			height: "130px"
		}


		var settings = $.extend(defaults, options);
		
		var carouselList = $(this);
		$(this).css({"list-style": "none"});

		var cssCarouselList = {
			"list-style": "none",
    		"width": "10000px",
    		"padding": "0px",
    		"position": "relative"
		}

		var cssCarouselElement = {
			"display": "block",
    		"margin-right": "25px",
    		"float": "left"
		}

		var cssCarouselImg = {
	 		"max-width": "100px",
    		"height": settings.height
		}

		var cssCarouselHider = {
			   "width": settings.width,
    			"overflow": "hidden",
   			    "float": "left",
    			"margin": "50px"
		}

		var carouselElement = $(this).find("li");	
		var carouselImg = $(this).find("img");	
		$(carouselElement).css(cssCarouselElement);
		$(carouselImg).css(cssCarouselImg);
		$(carouselList).css(cssCarouselList);


		$(carouselList).wrap('<div class="carousel-hider"></div>');
		$(".carousel-hider").css(cssCarouselHider);


		$(".carousel-hider").after("<div class = 'carousel-arrow-right'> Вправо </div>");
		$(".carousel-hider").before("<div class = 'carousel-arrow-left'> Влево </div>");
		var rightUIEl = $('.carousel-arrow-right');
		var leftUIEl = $('.carousel-arrow-left');
		
		var cssObj = {
        "float": "left",
	    "display": "block",
	    "color": "#a675b3",
	    "box-shadow": "inset 0 1px 1px rgba(111, 55, 125, 0.8), inset 0 -1px 0px rgba(63, 59, 113, 0.2), 0 9px 16px 0 rgba(0, 0, 0, 0.3), 0 4px 3px 0 rgba(0, 0, 0, 0.3), 0 0 0 1px #150a1e",
	    "background-image": settings.colorButton,
	    "text-shadow": "0 0 21px rgba(223, 206, 228, 0.5), 0 -1px 0 #311d47",
	    "padding": "5px",
	    "margin-top": "50px",
	    "content":"hhhhh"
     	 }

	    var cssObjHover = {
	    "cursor": "pointer",
	    "transition": "color 200ms linear, text-shadow 500ms linear",
	    "color": settings.colorHiden,
	    "text-shadow": "0 0 21px rgba(223, 206, 228, 0.5), 0 0 10px rgba(223, 206, 228, 0.4), 0 0 2px #2a153c"
	    } 

	    $('.carousel-arrow-left').css({

    	"margin-right": "25px",
    	"margin-left": "50px"
   		});
   		$('.carousel-arrow-right').css({
    	"margin-left": "20px"
    	});

	    $('.carousel-arrow-left').css(cssObj);
	    $('.carousel-arrow-right').css(cssObj);

	    $(leftUIEl).mouseover(function(){$(this).css(cssObjHover)}).mouseout(function(){$(this).css(cssObj)});
	    $(rightUIEl).mouseover(function(){$(this).css(cssObjHover)}).mouseout(function(){$(this).css(cssObj)});


        var pixelsOffset = 110;
	    var currentLeftValue = 0;
	    var elementsCount = carouselList.find('li').length;
	    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
	    var maximumOffset = 0;

	       leftUIEl.click(function() {        
	            if (currentLeftValue != maximumOffset) {
	                currentLeftValue += 110;
	                carouselList.animate({ left : currentLeftValue + "px"}, 500);
	            }        
	        });
 
	    rightUIEl.click(function() {        
	        if (currentLeftValue != minimumOffset) {
	            currentLeftValue -= 110;
	            carouselList.animate({ left : currentLeftValue + "px"}, 500);
	                
	           }
	      });
		}	
		return this;
})(jQuery);
