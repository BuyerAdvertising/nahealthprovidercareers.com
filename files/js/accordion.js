jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.header-inside .hamburger-title').removeClass('active');
		jQuery('.header-inside .hamburger-title').attr('aria-expanded', 'false');
		jQuery('.header-inside .hamburger-content').slideUp(300).removeClass('open');
	}

	jQuery('.hamburger-title').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('.header-inside ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});