// Company: Name here
// Developer: Adam Culpepper (@adamculpepper)

$(function() {

	// Input year for the footer copyright
	var year = new Date().getFullYear();
	$(".footer .year").text(year);

	function detectIE() {
		// Slightly modified version of Angular's method of checking for Internet Explorer (IE), including checking for IE11

		// check 6-10
		msie = parseInt((/msie (\d+)/.exec((navigator.userAgent).toLowerCase()) || [])[1]);
		if (isNaN(msie)) {
			// not 6-10, check 11
			msie = parseInt((/trident\/.*; rv:(\d+)/.exec((navigator.userAgent).toLowerCase()) || [])[1]);
		}

		// will be a number if IE or NaN if not
		if (msie) {
			$('body').addClass('ie ie' + msie);
		}
	}
	detectIE();

	// General DOM Manipulations


	// https://github.com/mathiasbynens/jquery-placeholder
	// make sure to minify
	// $('input, textarea').placeholder();


	//HTML5 Placeholder Text jQuery Fallback with Modernizr
	//@url     http://uniquemethod.com/
	//@author  Unique Method

	//check placeholder browser support
	if (!Modernizr.input.placeholder) {

		//set placeholder values
		$(this).find('[placeholder]').each(function() {
			if ($(this).val() == '') { // if field is empty
				$(this).val($(this).attr('placeholder'));
			}
		});

		//focus and blur of placeholders
		$('[placeholder]').focus(function() {
			if ($(this).val() == $(this).attr('placeholder')) {
				$(this).val('');
				$(this).removeClass('placeholder');
			}
		}).blur(function() {
			if ($(this).val() == '' || $(this).val() == $(this).attr('placeholder')) {
				$(this).val($(this).attr('placeholder'));
				$(this).addClass('placeholder');
			}
		});

		//remove placeholders on submit
		$('[placeholder]').closest('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				if ($(this).val() == $(this).attr('placeholder')) {
					$(this).val('');
				}
			})
		});
	}

});


$(document).ready(function() {

	if ($(".fancybox").length > 0) {
		$(".fancybox").fancybox();
	}

	$(window).resize(function() {
		resizeEvents();
	});

	resizeEvents();

	function resizeEvents() {
		var windowWidth = $(window).width();
		// do magic
	}

	//Set Slider dimentions to avoid flicker

	function setSliderDimentions() {
		var slider = $(".cycle-slideshow");
		var sliderHeight = slider.find("img").eq(0).height();
		slider.height(sliderHeight);
	}
	if ($(".slider").height() == 0) {
		$(".slider").css({
			"height": "auto"
		})
	}

});