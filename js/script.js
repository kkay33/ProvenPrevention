var previous = false;

$(document).ready(function($) {
	"use strict";
	
	$('.goback').on('click', function(){
		window.location.href = "blog.html";
		
	});
	
	
	
	
	$('.inner-hover').find('h2').on('click', function(){
		$('.Popup1').css('visibility','visible');
		$('.blur').css('visibility','visible');
		var list = document.createElement('ul');
		var references = document.createElement('ol');
		list.style.fontSize = "20px"
		var tit = document.createElement('h5');
		var ref = document.createElement('h5');
		ref.textContent = 'References:';
		ref.style.fontSize = "20px";
		tit.textContent = "Tips:";
		tit.style.fontSize = "20px";
		if ($(this).hasClass('one')) {
			var advice = ["eat","drink","eat","drink","eat","drink","eat","drink"];
			var refs = ["ref one","ref two"]
			advice.forEach(function (item) {
				var li = document.createElement('li');
				li.textContent = item;
				list.appendChild(li);
			});
			refs.forEach(function (item) {
				var li = document.createElement('li');
				li.textContent = item;
				references.appendChild(li);
			});
			$('.advicetitle').text("Tips to Prevent Alzheimer's Disease");
			$('.advicesection').append(tit);
			$('.advicesection').append(list);
			$('.advicesection').append(ref);
			$('.advicesection').append(references);
		}
		if ($(this).hasClass('two')) {
			var advice = ["run","yell"]
			var refs = ["ref one","ref two"]
			advice.forEach(function (item) {
				var li = document.createElement('li');
				li.textContent = item;
				list.appendChild(li);
			});
			refs.forEach(function (item) {
				var li = document.createElement('li');
				li.textContent = item;
				references.appendChild(li);
			});
			$('.advicetitle').text("Tips to Prevent Coronary Artery Disease");
			$('.advicesection').append(tit);
			$('.advicesection').append(list);
			$('.advicesection').append(ref);
			$('.advicesection').append(references);
		}
		if ($(this).hasClass('three')) {
			$('.advicetitle').text("Tips to Prevent Colorectal Cancer");
		}
		if ($(this).hasClass('four')) {
			$('.advicetitle').text("Tips to Prevent Pancreatitis");
		}
		if ($(this).hasClass('five')) {
			$('.advicetitle').text("Tips to Prevent Chronic Kidney Disease");
		}
		if ($(this).hasClass('six')) {
			$('.advicetitle').text("Tips to Prevent Osteoporosis");
		}
		if ($(this).hasClass('seven')) {
			$('.advicetitle').text("Tips to Prevent Head and Neck Cancer");
		}
		if ($(this).hasClass('eight')) {
			$('.advicetitle').text("Tips to Prevent Gallstone");
		}
		if ($(this).hasClass('nine')) {
			$('.advicetitle').text("Tips to Prevent Diabetes");
		}
		if ($(this).hasClass('ten')) {
			$('.advicetitle').text("Tips to Prevent Vascular Dementia");
		}
		if ($(this).hasClass('eleven')) {
			$('.advicetitle').text("Tips to Prevent Hypertensive Disease");
		}
		if ($(this).hasClass('twelve')) {
			$('.advicetitle').text("Tips to Prevent Chronic Obstructive Pulmonary Disease");
		}
		if ($(this).hasClass('thirteen')) {
			$('.advicetitle').text("Tips to Prevent Non-Alcohol Related Fatty Liver Disease");
		}
		if ($(this).hasClass('fourteen')) {
			$('.advicetitle').text("Tips to Prevent Atherosclerosis");
		}
		if ($(this).hasClass('fifteen')) {
			$('.advicetitle').text("Tips to Prevent Parkinson's Disease");
		}
		if ($(this).hasClass('sixteen')) {
			$('.advicetitle').text("Tips to Prevent Ovarian Caner");
		}
		if ($(this).hasClass('seventeen')) {
			$('.advicetitle').text("Tips to Prevent Diverticulosis");
		}
		if ($(this).hasClass('eighteen')) {
			$('.advicetitle').text("Tips to Prevent Prostate Cancer");
		}
		
	});
	$('.close').on('click', function(){
		$(this).parent().css('visibility','hidden');
		$('.blur').css('visibility','hidden');
		$('.advicesection').children('ul').remove();
		$('.advicesection').children('h5').remove()
		$('.advicesection').children('ol').remove();
		
	});
	$('.blur').on('click', function(){
		$('.Popup1').css('visibility','hidden');
		$(this).css('visibility','hidden');
		$('.advicesection').children('ul').remove();
		$('.advicesection').children('h5').remove();
		$('.advicesection').children('ol').remove()
	});
	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.iso-call');
		var $filter=$('.filter');
		

		try{
			$container.imagesLoaded( function(){
				$container.trigger('resize');
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});

				setTimeout(Resize, 1500);
			});
		} catch(err) {
		}

		winDow.on('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});

		
		
		// Isotope Filter 
		$filter.find('a').on('click', function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


	var filterItemA	= $('.filter li a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});

	/* ---------------------------------------------------------------------- */
	/*	filter portfolio toggle
	/* ---------------------------------------------------------------------- */

	var togButton = $('a.filter-toggle'),
		filterList = $('ul.filter');

	togButton.on('click', function(event){
		event.preventDefault();
		filterList.slideToggle();
	});

	

	/*-------------------------------------------------*/
	/* =  count increment
	/*-------------------------------------------------*/
	try {
		$('.statistic-post').appear(function() {
			$('.timer').countTo({
				speed: 4000,
				refreshInterval: 60,
				formatter: function (value, options) {
					return value.toFixed(options.decimals);
				}
			});
		});
	} catch(err) {

	}
	
	/*-------------------------------------------------*/
	/* =  OWL carousell
	/*-------------------------------------------------*/
	try {
		var owlWrap = $('.owl-wrapper');

		if (owlWrap.length > 0) {

			if (jQuery().owlCarousel) {
				owlWrap.each(function(){

					var carousel= $(this).find('.owl-carousel'),
						dataNum = $(this).find('.owl-carousel').attr('data-num'),
						dataNum2,
						dataNum3;

					if ( dataNum == 1 ) {
						dataNum2 = 1;
						dataNum3 = 1;
					} else if ( dataNum == 2 ) {
						dataNum2 = 2;
						dataNum3 = dataNum - 1;
					} else {
						dataNum2 = dataNum - 1;
						dataNum3 = dataNum - 2;
					}

					carousel.owlCarousel({
						autoPlay: 10000,
						navigation : true,
						items : dataNum,
						itemsDesktop : [1199,dataNum2],
						itemsDesktopSmall : [991,dataNum3],
						itemsTablet : [768, dataNum3],
					});

				});
			}
		}

	} catch(err) {

	}

	
	
	
	/*-------------------------------------------------*/
	/* = slider Testimonial
	/*-------------------------------------------------*/

	var slidertestimonial = $('.bxslider');
	
	try{		
		slidertestimonial.bxSlider({
			mode: 'vertical'
		});
	} catch(err) {
	}
	

	/* ---------------------------------------------------------------------- */
	/*	menu responsive
	/* ---------------------------------------------------------------------- */
	var menuClick = $('a.elemadded'),
		navbarVertical = $('.nav-menu');
		
	menuClick.on('click', function(e){
		e.preventDefault();

		if( navbarVertical.hasClass('active') ){
			navbarVertical.slideUp(300).removeClass('active');
		} else {
			navbarVertical.slideDown(300).addClass('active');
		}
	});

	winDow.on('resize', function(){
		if ( winDow.width() > 991 ) {
			navbarVertical.slideDown(300).removeClass('active');
		} else {
			navbarVertical.slideUp(300).removeClass('active');
		}
	});

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	var submitContact = $('#submit_contact'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
					message.hide().removeClass('alert-success').removeClass('alert-danger').addClass('alert-success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('alert-success').removeClass('alert-danger').addClass('alert-danger').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});

	

});

function Resize() {
	$(window).trigger('resize');
}


	
/* ---------------------------------------------------------------------- */
/*	works carousel
/* ---------------------------------------------------------------------- */

$(window).on('load', function() {
	var winDowHeight = $(window).outerHeight();
	$('header').css('height', winDowHeight);
});
$(window).on('resize', function() {
	var winDowHeight = $(window).outerHeight();
	$('header').css('height', winDowHeight);
});
