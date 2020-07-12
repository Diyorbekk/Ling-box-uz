$(document).ready(function () {
	var $animation_elements = $('.lesson-section-title');
	var $animation_elements2 = $('.animation-border-block');
	var $animation_elements3 = $('.lesson-section-title-back-text');
	var $animation_elements4 = $('.NumbersSectionTitleBackText');
	var $animation_elements5 = $('.animation-box-img');
	var $animation_elements6 = $('.NumbersBoxTitle');
	var $animation_elements7 = $('.ProductSectionTextBoxRound');
	var $animation_elements8 = $('.StepBox:nth-child(1)  .StepBoxImg');
	var $animation_elements9 = $('.StepBox:nth-child(3)  .StepBoxImg');
	var $animation_elements10 = $('.StepBox:nth-child(5)  .StepBoxImg');
	var $animation_elements11 = $('.StepBox:nth-child(1)  .StepBoxText');
	var $animation_elements12 = $('.StepBox:nth-child(3)  .StepBoxText');
	var $animation_elements13 = $('.StepBox:nth-child(5)  .StepBoxText');
	var $animation_elements14 = $('.NowOrderPriceImg');
	var animDuration = 1000;


	var $window = $(window);

	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animation_elements, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('animationText');

			}
		});
		$.each($animation_elements2, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('AnimationBorder');
				if($(window).width() < 767){
					$element.addClass('AnimationBorderMedia');
				}

			}
		});
		$.each($animation_elements3, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('AnimationOpacity');



			}
		});
		$.each($animation_elements4, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.animate({
					opacity: 1,
				}, 1000, function () {
				});

			}
		});
		$.each($animation_elements5, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('AnimationImg')
			}
		});
		$.each($animation_elements5, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('AnimationImg')
			}
		});

		$.each($animation_elements6, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.each(function() {
					var $this = $(this),
						countTo = $this.attr('data-count');

					$({ countNum: $this.text()}).animate({
							countNum: countTo
						},

						{

							duration: 1000,
							easing:'linear',
							step: function() {
								$this.text(Math.floor(this.countNum));
							},
							complete: function() {
								$this.text(this.countNum);
								//alert('finished');
							}

						});
				});


			}
		});

		$.each($animation_elements7, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.animate({  now: '0' }, {
					opacity: 0,
					step: function(now,fx) {
						$(this).addClass('AnimationNumRoundBox');
					}
				},1000);
			}
		});
		$.each($animation_elements8, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('StepBoxNum1');
			}
		});
		$.each($animation_elements9, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('StepBoxNum2');
			}
		});
		$.each($animation_elements10, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('StepBoxNum3');
			}
		});
		$.each($animation_elements11, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('StepBoxNumText1');
			}
		});
		$.each($animation_elements12, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('StepBoxNumText2');
			}
		});
		$.each($animation_elements13, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('StepBoxNumText3');
			}
		});
		$.each($animation_elements14, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('AnimationOrderImg');
			}
		});


	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
});