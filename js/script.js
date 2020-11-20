jQuery(document).ready(function() {




//scrollTop-1
	jQuery(".scrolltotop").click(function() {
			jQuery("html").animate({scrollTop : "0px"}, 400);
		});

		jQuery(document).scroll(function() {

			var otd = jQuery(document).scrollTop();
			if (otd > 500) {
				jQuery(".scrolltotop").fadeIn();

			} else {
				jQuery(".scrolltotop").fadeOut();
			}
		});
















































	
});