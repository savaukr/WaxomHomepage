jQuery(document).ready(function(){
	/* ������ �� ���������� ���������� ����� */
	var nextLink = jQuery('.next-slide');
	var prevLink = jQuery('.prev-slide');
	/* ������ ������ � ��������� */
	var slideWidth = jQuery('.slide-item').outerWidth();

// ��������� ������ � �������, ���� ���� ��������		
	function deleteShowArrow() {
	    var countItems = document.querySelectorAll('.slide-item').length;
		var slider = jQuery('.slider');
		var sliderWidth = slider.outerWidth();
		if (countItems * slideWidth <= sliderWidth) {
			$('.navy').addClass('disable');
			prevLink.unbind();
			nextLink.unbind();
		} else {
			$('.navy').removeClass('disable');
		}
		var newSliderWidth = countItems * slideWidth+30;
		slider.css({'width':newSliderWidth});
	}

	deleteShowArrow();
	$(window).resize(deleteShowArrow);

	function htmSlider(){
		/* ������� ��������� ���������� */
		/* ������� �������� */
		var slideWrap = jQuery('.slide-wrap');
		//var playLink = jQuery('.auto');
		var is_animate = false;
		/* �������� �������� */
		var newLeftPos = slideWrap.position().left - slideWidth;
		
		/* ���� �� ������ �� ��������� ����� */
		nextLink.click(function(){
			if(!slideWrap.is(':animated')) {
	
				slideWrap.animate({left: newLeftPos}, 500, function(){
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});

			}
		});

		/* ���� �� ������ �� ����������� ����� */
		prevLink.click(function(){
			if(!slideWrap.is(':animated')) {
			
				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);

			}
		});
		
		
		/* ������� �������������� ��������� �������� */
		/*
		function autoplay(){
			if(!is_animate){
				is_animate = true;
				slideWrap.animate({left: newLeftPos}, 500, function(){
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
					is_animate = false;
				});
			}
		}
		*/
		/* ����� �� ������� �����/����� */
		/*
		playLink.click(function(){
			if(playLink.hasClass('play')){
				playLink.removeClass('play').addClass('pause');
				jQuery('.navy').addClass('disable');
				timer = setInterval(autoplay, 1000);
			} else {
				playLink.removeClass('pause').addClass('play');
				jQuery('.navy').removeClass('disable');
				clearInterval(timer);
			}
		});
*/
	}
	
	/* ������������� ������� �������� */
	htmSlider();

});

