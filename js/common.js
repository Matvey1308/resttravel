$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('#speaker_carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    navigation:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1201:{
	            items:3
	        }
	    }
	});
	$('.mobile-button-wrapper').click(function() {
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active')
    });
	$('.carousel-prev').click(function () {
		$('.owl-prev').trigger('click');
	});
	$('.carousel-next').click(function () {
		$('.owl-next').trigger('click');
	});




	// When the window has finished loading create our google map below
   // google.maps.event.addDomListener(window, 'load', init);



   var groups = {};
   $('.galleryItem').each(function() {
	   var id = parseInt($(this).attr('data-group'), 10);

	   if (!groups[id]) {
		   groups[id] = [];
	   }

	   groups[id].push(this);
   });


   $.each(groups, function() {

	   $(this).magnificPopup({
		   type: 'image',
		   closeOnContentClick: true,
		   closeBtnInside: false,
		   gallery: {
			   enabled: true
		   }
	   })

   });

   $('nav a').click(function (e) {
	   e.preventDefault();
	   var slide = $(this).attr('data-slide');
	   $('html, body').animate({
		   scrollTop: $('div[data-slide= '+ slide + ']').offset().top - $('div.navigation').outerHeight()
	   }, 1000);
   });
  	$('.btn.btn-white').click(function () {
		$('html, body').animate({
 		   scrollTop: $('div[data-slide=slide6]').offset().top
 	   }, 1000);
  	});

});
