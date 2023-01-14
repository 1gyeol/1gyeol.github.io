$(document).ready(function(){

        
      //메뉴 버튼
      
       $(".menu_btn").click(function(){
         if($(".menu_bg").hasClass('on') == false){
              $(".menu_bg").addClass("on");
              $(".menu_btn_wrap").addClass("on");
              $(".menu_btn").addClass("on");
             $(".menu_btn span:nth-child(1)").addClass("on");
             $(".menu_btn span:nth-child(2)").addClass("on");
             $(".menu_btn span:nth-child(3)").addClass("on");
         }else{
             $(".menu_bg").removeClass("on");
             $(".menu_btn_wrap").removeClass("on");
             $(".menu_btn").removeClass("on");
             $(".menu_btn span:nth-child(1)").removeClass("on");
             $(".menu_btn span:nth-child(2)").removeClass("on");
             $(".menu_btn span:nth-child(3)").removeClass("on");
         }
          
          
          
      });
      
      
        /*메뉴버튼 fade*/
		
		$( window ).scroll( function() {
			if ( $( this ).scrollTop() > 200 ) {
				$( '.menu_btn' ).fadeIn();
                $( '.menu_bg' ).fadeIn();
                
			} else {
				$( '.menu_btn' ).fadeOut();
                $( '.menu_bg' ).fadeOut();
			}
		});
      
      
      
      //메뉴 타이틀 클릭시
      
       $(".menu_btn_wrap span a").click(function(){
         $(".menu_bg").removeClass("on");
         $(".menu_btn_wrap").removeClass("on");
         $(".menu_btn").removeClass("on");
         $(".menu_btn span:nth-child(1)").removeClass("on");
         $(".menu_btn span:nth-child(2)").removeClass("on");
         $(".menu_btn span:nth-child(3)").removeClass("on");
       });
    
      
      
    //메인
      $(".round").click(function(){
         if($(".bg").hasClass('on') == false){
             $(".bg").addClass("on");
             $(".logo").addClass("on");
             $(".l_bar").addClass("on");
             $(".r_bar").addClass("on");
             $(".main_txt").addClass("on");
             $(".scroll_down").addClass("on");
             
         }else{
             $(".bg").removeClass("on");
             $(".logo").removeClass("on");
             $(".l_bar").removeClass("on");
             $(".r_bar").removeClass("on");
             $(".main_txt").removeClass("on");
             $(".scroll_down").removeClass("on");
         }
          
          
          
      });
      
      
      
      
      
   //더보기 버튼
	$(".more_btn").click(function(){
     if($(".portfol_inner_wrap").hasClass('on') == false){
      $(this).siblings("ul").addClass("on");
      $(this).find("a").addClass('on');
      $(this).siblings("ul").find("li:eq(1)").addClass("on");
    }else{
      $(".portfol_inner_wrap").removeClass("on");
      $(this).siblings("ul").removeClass("on");
      $(this).find("a").removeClass('on');
      $(".portfol_txt").removeClass("on");
      }
    });
      
   //profile 영역

   $(window).scroll(function(){
	   var h=$(window).scrollTop();
	   
	   if(h > 300){
           $('.about_me').addClass('on');
		   $('.publishing').addClass('on');
           $('.design').addClass('on');
		   
	   }else{          
		   $('.about_me').removeClass('on');
           $('.publishing').removeClass('on');
           $('.design').removeClass('on');
	   }
   });
   $(window).trigger('scroll');   
      
     
         
    
    
    
   //potfolio 영역

   $(window).scroll(function(){
	   var h=$(window).scrollTop();
	   
	   if(h > 1300){
           $('.portfol_img').addClass('on');
           $('.portfol_txt').addClass('on');
           $('.portfol_count').addClass('on');
		   
	   }else{          
		   $('.portfol_img').removeClass('on');
           $('.portfol_txt').removeClass('on');
           $('.portfol_count').removeClass('on');
	   }
   });
   $(window).trigger('scroll');   
    
    
    /*포폴*/

			var visualContain =  $('.portfol_img');

			var containWidth = $('.visual_img').width();

			var visual = $('.visual_img');
                
            var portfol_txt = $('.inner_txt');  
                
			var current = 0;

			var setIntervalId;

			var prev = $('.arrow_left');

			var next = $('.arrow_right');
            
            var count = $('.visual_img').length;
    
            
            
    
            $('.count_total').html(count);
            
    
			next.click(function(){

				var n = current + 1;

					if(n == visual.size()){

						n = 0;
					}

					move(n);
                
                $('.count_current i').html(n+1);
               
                
			});



			prev.click(function(){

				var n = current - 1;

					if(n == -1){

						n = 5;

					}

					 moveL(n);

                     $('.count_current i').html(n+1);
			});

			$('.website, .portfol_count').on({

				mouseover:function(){

					clearInterval(setIntervalId);

				},

				mouseout:function(){

					timer();

				}

			});



                     
            timer();

            function timer(){

                setIntervalId = setInterval(function(){

                    var n = current + 1;

                    if(n == visual.size()){

                        n = 0;

                    }

                next.trigger('click');

                }, 3500);
            }


                
            
			function move(i){

				if(current == i) return;
                
                var currentEt = portfol_txt.eq(current);

                var nextEt = portfol_txt.eq(i);

				var currentEl = visual.eq(current);

				var nextEl = visual.eq(i);

				currentEl.css({left:0}).stop().animate({left:'-100%'});

				nextEl.css({left:'100%'}).stop().animate({left:0});
                
                currentEt.css({display:'none'});

                nextEt.css({display:'block'});
                
                

				current = i;

			}

				function moveL(i){

				if(current == i) return;
                    
                var currentEt = portfol_txt.eq(current);

                var nextEt = portfol_txt.eq(i);

				var currentEl = visual.eq(current);

				var nextEl = visual.eq(i);

				 currentEl.css({left:0}).stop().animate({left:'100%'});

				 nextEl.css({left:'-100%'}).stop().animate({left:0});
                    
                 currentEt.css({display:'none'});

                 nextEt.css({display:'block'});

				 current = i;

			}
      
     
      
 
      /*아트워크*/
      
     $(window).scroll(function(){
	   
	   if($(this).scrollTop() > 2000) {

           $('.artwork_contents1').addClass('on');
		   
		   
	   }else{          
		   $('.artwork_contents1').removeClass('on');
	   }
   });
   $(window).trigger('scroll');   
      
    $(".artwork_btn").click(function(){
       if($(".artwork_contents2").hasClass('on') == false){
       $(".artwork_contents2").addClass("on");
       $(".artwork_btn a").addClass("on");
       }else{
       $(".artwork_contents2").removeClass("on");
       $(".artwork_btn a").removeClass("on");
       }
        
    });
      
    /*contact*/
      
      $(window).scroll(function(){
	   var h=$(window).scrollTop();
	   
	   if(h > 3700){
           $('.contact_contents').addClass('on');
		   
		   
	   }else{          
		   $('.contact_contents').removeClass('on');
	   }
   });
   $(window).trigger('scroll');    
        
      
      
      
    
    
    
    
    
});