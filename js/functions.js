(function(){
	function addListeners(){
		jQuery('.toggle-nav').click(function(){
			if (jQuery(window).width() < 800)
			{
				jQuery('.site-nav').toggleClass('active');
				jQuery('html').toggleClass('noscroll');
				jQuery('.js-expand').removeClass('.js-expand');
			}
		});

		jQuery('.site-logo').click(function(e){
			if(jQuery('.site-nav').hasClass('active')){
				e.preventDefault();
			}
		})

		jQuery('.js-expand').on('click', function(e){
			e.stopPropagation();
			e.preventDefault();
			var target = jQuery(this).parent();
			target.toggleClass('js-expand');
		});

		jQuery('.teaser h2').on('click', function(){
			var target = jQuery(this);
			jQuery('html,body').animate({
				scrollTop: target.offset().top
			}, 1000, 'linear');
		});
	}
	function backstretch(){
		var hero = jQuery('.hero');
		if (hero.length)
		{
			if (jQuery(window).width() > 800)
			{
				var windowHeight = jQuery(window).height();
				hero.css('max-height', windowHeight);
			}
		}
	}

	jQuery(document).ready(function(){
		addListeners();
		backstretch();
	});
})(jQuery);