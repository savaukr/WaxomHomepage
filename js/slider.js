jQuery(document).ready(function(){
	/* ������ �� ���������� ���������� ����� */
	var nextLink = jQuery('.next-slide');
	var prevLink = jQuery('.prev-slide');
	/* ������ ������ � ��������� */
	var slideWidth = jQuery('.slide-item').outerWidth();
	var playLink = jQuery('.auto');

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
		
		
		var spanActive;
		/* ���� �� ������ �� ��������� ����� */
		nextLink.click(function(){
			if(!slideWrap.is(':animated')) {
				spanActive = jQuery('.span-active');
				slideWrap.animate({left: newLeftPos}, 500, function(){
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});
				spanActive.removeClass('span-active');
				spanActive.next('.indicate-slider span').addClass('span-active');
			}

		});

		/* ���� �� ������ �� ����������� ����� */
		prevLink.click(function(){
			if(!slideWrap.is(':animated')) {
				spanActive = jQuery('.span-active') || jQuery('.indicate-slider span').eq(5);
				spanActive.addClass('span-active');
				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);
				spanActive.removeClass('span-active');
				spanActive.prev('.indicate-slider span').addClass('span-active')
			}
		});
		
		
		/* ������� �������������� ��������� �������� */
		
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
		
		/* ����� �� ������� �����/����� */
		
		playLink.click(function(){
			if(playLink.hasClass('play')){
				playLink.removeClass('play').addClass('pause');
				jQuery('.navy').addClass('disable');
				playLink.html("GET STOPED");
				timer = setInterval(autoplay, 1000);
			} else {
				playLink.removeClass('pause').addClass('play');
				jQuery('.navy').removeClass('disable');
				playLink.html("GET STARTED");
				clearInterval(timer);
			}
		});

	}
	
	/* ������������� ������� �������� */
	htmSlider();

});

