var previous = false;
var getadvice;
var getrefs;
var getrefsname;
var getexpsci;
var title;
var opened = [];
var openlength = 0;
$(document).ready(function($) {
	"use strict";
	
	$('.goback').on('click', function(){
		window.location.href = "blog.html";
		
	});

	function linky() {
		this.style.color = 'rgb(163, 132, 91)';
	}
	function linky2() {
		this.style.color = 'black';
	}
	
	
	
	
	function explaination() {
		$('.advicesection').children('div').remove();
		var list = document.createElement('div');
		var naming = 0; 
		
		getadvice.forEach(function (item) {
			var li = document.createElement('p');
			li.textContent = item;
			li.style.fontFamily = 'Garamond';
			li.style.fontSize = "22px";
			li.style.color = 'black';

			var li2 = document.createElement('p');
			li2.style.marginBottom = "13px";
			li2.textContent = getexpsci[naming];
			li2.style.fontFamily = 'Garamond';
			li2.style.fontSize = "18px";
			li2.style.color = 'black';

			var explainbox = document.createElement('div');
			explainbox.style.textAlign = 'center';
			var explain = document.createElement('button');
			explain.style.fontFamily = '"Poppins", sans-serif';
			explain.style.fontSize = "17px"
			explain.style.borderColor = "rgb(163, 132, 91)";
			explain.style.color = "rgb(163, 132, 91)";
			explain.style.backgroundColor = 'rgb(255, 240, 220)';
			explainbox.style.paddingBottom = "25px";
			explain.onclick = updateopened;
			
			var a = document.createElement('a');
      		var linkText = document.createTextNode(getrefsname[naming]);
      		a.appendChild(linkText);
			a.href = getrefs[naming];
			a.style.color = 'black';
			a.style.fontFamily = 'Garamond';
			a.style.marginBottom = "13px";
			a.style.fontSize = "18px";
			a.onmouseover = linky;
			a.onmouseout = linky2;

			var outline = document.createElement('div');
			outline.style.textAlign = 'center';
			outline.style.border = 'solid';
			outline.style.padding = "13px 10px 0px 10px";
			
			if (opened.includes(naming)) {
			outline.style.borderColor = 'rgb(161, 140, 112)';
			outline.style.borderRadius = "25px"
			outline.style.background = "rgb(211, 191, 164)";
			outline.appendChild(li);
			outline.appendChild(li2);
			outline.appendChild(a);
			list.appendChild(outline);
			explain.className = "Close" + naming;
			explain.textContent = "Close";
			explainbox.appendChild(explain);
			list.appendChild(explainbox);
			} else {
				outline.style.borderColor = 'rgb(255, 240, 220)';
				outline.appendChild(li);
				list.appendChild(outline);
				explain.className = "Numberadvice" + naming;
				explain.textContent = "Explain the science";
				explainbox.appendChild(explain);
				list.appendChild(explainbox);
			}
			
			naming += 1;	
			});
			
			$('.advicetitle').text(title);
			$('.advicesection').append(list);
	}

	function updateopened() {
		var holder = this.className[0];
		if (holder === 'N') {
			var holder2 = this.className[12];
			opened += holder2;
			openlength += 1;
		} else {
			var holder2 = this.className[5];
			var holdopen = opened;
			opened = [];
			for (var i=0; i < openlength; i++) {
				if (holdopen[i] != holder2) {
					opened += holdopen[i];
				}
			}
			openlength -= 1;
		}
		explaination();
	}
	
	
	
	$('.inner-hover').find('h2').on('click', function(){
		$('.Popup1').css('visibility','visible');
		$('.blur').css('visibility','visible');
		
		if ($(this).hasClass('one')) {
			getadvice = ["Exercise: at least 30 minutes of moderately vigorous aerobic exercise, three to four days per week","Eat a Mediterranean diet: The diet includes fresh vegetables and fruits; whole grains; olive oil; nuts; legumes; fish; moderate amounts of poultry, eggs, and dairy; moderate amounts of red wine; and red meat only sparingly","Get enough sleep: Aim for seven to eight hours of high quality sleep per night","Learn new things: Partake in cognitively stimulating activity","Connect socially","Drink—but just a little: One drink per day for women, one or two for men","Take care of your heart: Manage your blood pressure","Take care of your mental health: Manage your stress levels","Wear hearing aids if needed"];
			getrefs = ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3335448/","https://academic.oup.com/ajcn/article/109/2/361/5299946","https://pubmed.ncbi.nlm.nih.gov/29632177/","https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4417099/","https://www.sciencedirect.com/science/article/abs/pii/S1474442204007677","https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2908373/","https://pubmed.ncbi.nlm.nih.gov/31706889/","https://content.iospress.com/articles/journal-of-alzheimers-disease/jad180478","https://jamanetwork.com/journals/jamaneurology/fullarticle/802291"];
			getrefsname = ["Link: Total daily physical activity and the risk of AD and cognitive decline in older adults","Link: Associations of the Mediterranean diet with cognitive and neuroimaging phenotypes of dementia in healthy older adults","Link: β-Amyloid accumulation in the human brain after one night of sleep deprivation","Link: Participation in cognitively-stimulating activities is associated with brain structure and cognitive function in preclinical Alzheimer’s disease","Link: An active and socially integrated lifestyle in late life might protect against dementia","Link: Alcohol in Moderation, Cardioprotection and Neuroprotection: Epidemiological Considerations and Mechanistic Studies","Link: Antihypertensive medications and risk for incident dementia and Alzheimer's disease: a meta-analysis of individual participant data from prospective cohort studies","Link: Vital Exhaustion and Incidence of Dementia: Results from the Copenhagen City Heart Study","Link: Hearing Loss and Incident Dementia"];
			getexpsci= ["716 older adults without dementia had their activity levels measured for 10 days. 4 years later 71 participants had developed Alzheimer's disease. The inviduals with low activity levels were 2.3 times more likely to develop the disorder than individuals with high activity levels. The association remained after adjusting for self-report physical, social, and cognitive activities, as well as current level of motor function, depressive symptoms, chronic health conditions, and APOE allele status.","The diet of 121 older adults was evaluated on the degree of adherence to the Mediterranean diet. Neuropsychological testing revealed significantly better learning and memory scores for individuals with high Mediterranean diet adherence. Brain imaging studies showed significantly larger dentate gyrus volumes in high adherence individuals. These results remained when controlling for age, sex, education, BMI, and estimated kilocalories.","yo","yo","yo","yo","yo","yo","yo"];
			title = "Preventing Alzheimer's Disease";
			explaination();
			
		}else if ($(this).hasClass('two')) {
			title = "Preventing Coronary Artery Disease";
			explaination();
		}else if ($(this).hasClass('three')) {
			title = "Preventing Colorectal Cancer";
			generatelist()
		}else if ($(this).hasClass('four')) {
			
			title = "Preventing Pancreatitis";
			generatelist()
		}else if ($(this).hasClass('five')) {
			
			title = "Preventing Chronic Kidney Disease";
			generatelist()
		}else if ($(this).hasClass('six')) {
			
			title = "Preventing Osteoporosis";
			generatelist()
		}else if ($(this).hasClass('seven')) {
			
			title = "Preventing Head and Neck Cancer";
			generatelist()
		}else if ($(this).hasClass('eight')) {
			
			title = "Preventing Gallstones";
			generatelist()
		}else if ($(this).hasClass('nine')) {
			
			title = "Preventing Diabetes";
			generatelist()
		}else if ($(this).hasClass('ten')) {
			
			title = "Preventing Vascular Dementia";
			generatelist()
		}else if ($(this).hasClass('eleven')) {
			
			title = "Preventing Hypertensive Disease";
			generatelist()
		}else if ($(this).hasClass('twelve')) {
			
			title = "Preventing Chronic Obstructive Pulmonary Disease";
			generatelist()
		}else if ($(this).hasClass('thirteen')) {
			
			title = "Preventing Non-Alcohol Related Fatty Liver Disease";
			generatelist()
		}else if ($(this).hasClass('fourteen')) {
			
			title = "Preventing Atherosclerosis";
			generatelist()
		}else if ($(this).hasClass('fifteen')) {
			
			title = "Preventing Parkinson's Disease";
			generatelist()
		}else if ($(this).hasClass('sixteen')) {
			
			title = "Preventing Ovarian Caner";
			generatelist()
		}else if ($(this).hasClass('seventeen')) {
			
			title = "Preventing Diverticulosis";
			generatelist()
		}else if ($(this).hasClass('eighteen')) {
			
			title = "Preventing Prostate Cancer";
			generatelist()
		}
		
	});
	$('.close').on('click', function(){
		$(this).parent().css('visibility','hidden');
		$('.blur').css('visibility','hidden');
		opened = [];
		
		
	});
	$('.blur').on('click', function(){
		$('.Popup1').css('visibility','hidden');
		$(this).css('visibility','hidden');
		opened = [];
		
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
