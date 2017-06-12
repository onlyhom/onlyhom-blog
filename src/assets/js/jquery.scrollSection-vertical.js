(function($){
    $.fn.scrollSection = function(init){
        var option = {
            "autoPlay" : false,
            "autoPlayTime":3000,
            "eventType":"click",
            "width":"100%",
            "height":"400px",
            preCallback: function(){},
            nextCallback: function(){}
        }
        $.extend(option,init);

        function preScroll(vcon, offset, index){
            var lastItem = vcon.find('ul').find('li').last();
            vcon.find("ul").prepend(lastItem);
            vcon.css("top", offset);
            vcon.stop().animate({
            	top: "0px"
            	}, "normal", function() {
            		option.preCallback(index);
            });
           
        }

        function nextScroll(vcon, offset, index){
            vcon.stop().animate({
              top: offset
            }, "normal", function() {
	            var firstItem = vcon.find('ul').find('li').first();
	            vcon.find("ul").append(firstItem);
            	vcon.css("top", "0px");
				option.nextCallback(index);
            });

        }


    //     function scrollTo(vcon, offset, index){
    //         vcon.stop().animate({
    //           top: offset*index
    //         }, "normal", function() {
    //         	for(var i=0; i<index; i++){
		  //           var firstItem = vcon.find('ul').find('li').first();
		  //           vcon.find("ul").append(firstItem);
    //         	}
    //         	vcon.css("top", "0px");
				// option.nextCallback();
    //         });
    //     }

        function autoPlay(me){
            var timer = setInterval(function(){
                nextScroll(me.find('.viewContent'));
            },option.autoPlayTime);

            me.find('.viewContent').hover(function(){
            　  clearInterval(timer);
             },function(){
                timer = setInterval(function(){
                  nextScroll(me.find('.viewContent'));
                },option.autoPlayTime);
            });
        }

        return this.each(function(index){
            var me = $(this);
            me.css('width', option.width);
            if(option.height == "auto"){
                console.log(me.find('.zoomImage').outerHeight(true));
                me.find('.viewShow').css('height', '183px');
                //me.find('.viewShow').css('height', me.find('.zoomImage').outerHeight(true) );
            }else{
            	me.find('.viewShow').css('height', option.height);
            }
            

			var offset = (me.find('.viewContent').find('li').outerHeight(true)) * -1;
            me.find('.goNext span').on(option.eventType,function(){
                nextScroll(me.find('.viewContent'), offset, index);
            });
            me.find('.goPrev span').on(option.eventType,function(){
                preScroll(me.find('.viewContent'), offset, index);
            });


            if(option.autoPlay){
                autoPlay(me);
            }

        });
    };
})(jQuery);





