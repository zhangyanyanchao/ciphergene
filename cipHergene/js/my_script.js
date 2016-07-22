(function($){

	$(document).ready(function(){

		$('.nav__primary>ul>li>a').each(function(){
	        var $this = $(this),
	            txt = $this.text();
		        $this.html('<div><span>'+ txt +'</span></div><div><span>'+ txt +'</span></div>');
		});

		$('.banner-btn').find('a').addClass('btn-primary');

		$('.btn-primary, .btn-link').each(function(){
	        var $this = $(this),
	            txt = $this.text();
		        $this.html('<div><span>'+ txt +'</span></div>');
		});


  		$('.banner_list').each(function(){
			_this = $(this).parent();
			_this.append('<div class="cont_banner"></div>');
			_this.find('.banner_list').appendTo(_this.find('.cont_banner'));
		});


  		$('.service-box.type_2').each(function(){
  			_this = $(this);
  			_this.find('h2').insertBefore(_this.find('.icon'));
  		});

  		$('.block_4').find('li').each(function(){
			_this = $(this);
			_this.find('.post_metabox').appendTo(_this.find('.featured-thumbnail'));
		});


		$('.sidebar .comments-custom').find('.comments-custom_li').each(function(){
			_this = $(this);
			_this.find('.comments-custom_h_title').insertBefore(_this.find('.comments-custom_txt'));
		});



		$('.posts_list1 .mini-post-holder .mini-post-content .excerpt').each(function(){
			var $this = $(this),
				txt = $this.text();
				newstr = '<p>'+ txt +'</p>';
				$this.html(newstr);
  		});

	 	$(window).resize(
		   function(){
		    if($(window).width()< 767){
			    	$('body').find('section').removeClass('lazy-load-box');
			    	$('body').find('section').removeClass('effect-slideup');
			    	$('body').find('section').removeClass('effect-slidedown');
			    	$('body').find('section').removeClass('effect-slidefromleft');
			    	$('body').find('section').removeClass('effect-slidefromright');
			    	$('body').find('section').removeClass('effect-zoomin');
			    	$('body').find('section').removeClass('effect-zoomout');
			    	$('body').find('section').removeClass('effect-rotate');
			    	$('body').find('section').removeClass('effect-skew');
			    	$('body').find('section').removeClass('effect-fade');
		    	}

		    	$('.g_map_cont').width($(window).width());
				$('.g_map_cont').css({width: $(window).width(), "margin-left": ($(window).width()/-2), 'left':'50%'});


				if($(window).width()<752){
			    	$('.cont_banner').width($(window).width());
				    $('.cont_banner').css({width: $(window).width(), "margin-left": ($(window).width()/-2)});
				    $('.cont_banner .banner_list>li>.featured-thumbnail>a img').css({width: $(window).width()/2, "max-width": ($(window).width()/2)});
				}else{
					$('.cont_banner').width($(window).width());
				    $('.cont_banner').css({width: $(window).width(), "margin-left": ($(window).width()/-2)});
				    $('.cont_banner .banner_list>li>.featured-thumbnail>a img').css({width: $(window).width()/3, "max-width": ($(window).width()/3)});
				}


			    setTimeout(function () {
				    $('.cont_banner .banner_list>li').find('.block_cont').each(function(){
				    	_this = $(this);
				    	var h_a = _this.parent().parent().find("a").height();
				    	var h_cont = _this.parent().parent().find(".block_cont").outerHeight();
				    	var corr_h = (h_a - h_cont)/2;
				    	_this.parent().find('.block_cont').css({'top': corr_h});
				    });
			    }, 600);

			    setTimeout(function () {
				    $('.block_4>li .post_metabox').find('a').each(function(){
				    	_this = $(this);
				    	var h_a1 = _this.height();
				    	var h_cont1 = _this.find("span").outerHeight();
				    	var corr_h1 = (h_a1 - h_cont1)/2;
				    	_this.find('span').css({'top': corr_h1});
				    });
			    }, 300);


				$('.cherry-fixed-layout').each(function(){


					if($(window).width()>1210){
						$('.cont_banner').css({"max-width": 1210, "margin-left": (1210/-2)});
						$('.cont_banner .banner_list>li>.featured-thumbnail>a img').css({"max-width": (1210/3), "max-width": (1210/3)});

						$('.g_map_cont').css({"max-width": 1210, "margin-left": (1210/-2)});

						//$('.header .container').css({"max-width": 1210, "margin-left": (1210/-2)});

					}else{
						$('.g_map_cont').css({"max-width": "100%", "margin-left": 0, "left": 0});
					}

			});



			}

		).trigger('resize');

		addEventsFunction();


	});


	function addEventsFunction(){
		$(document).on('scroll', function() {

			if ( $("div").hasClass("isStuck") ) {
				//$(".menu_bg").css({"height":"100%"});
				$(".menu_bg").addClass('act_1');
			}else{
				$(".menu_bg").removeClass('act_1');
			}
		}).trigger('scroll');
	}

 
})(jQuery);