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
   google.maps.event.addDomListener(window, 'load', init);

   function init() {
	   // Basic options for a simple Google Map
	   // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	   var contentString = '<div style="overflow: auto;">' +
'	   <div style="margin-bottom: 3px;">' +
'	   <strong>Taurus Hotel &amp; Spa</strong>' +
	   '</div>' +
	   '<div>пл. Князя Святослава, 5, Львів, Львівська область, 79000</div>' +
	   '</div>';
	   var mapOptions = {
		   // How zoomed in you want the map to start at (always required)
		   zoom: 11,

		   // The latitude and longitude to center the map (always required)
		   center: new google.maps.LatLng(49.842367,24.0072618), // New York

		   // How you would like to style the map.
		   // This is where you would paste any style found on Snazzy Maps.
		   styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"color":"#ff0000"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#424b5b"},{"weight":2},{"gamma":"1"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#545b6b"},{"gamma":"0"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"lightness":"0"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#545b6b"},{"gamma":"1"},{"weight":"10"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#121318"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#2c2e3d"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"weight":"2.00"}]},{"featureType":"landscape.man_made","elementType":"labels.text.fill","stylers":[{"color":"#ff0000"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#111428"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#111428"},{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#111428"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#666c7b"}]},{"featureType":"poi.attraction","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#545b6b"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#424a5b"},{"lightness":"0"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#808399"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#666c7b"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#71718c"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#515a70"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#414560"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]}]
	   };
	   var infowindow = new google.maps.InfoWindow({
   content: contentString
 });
	   // Get the HTML DOM element that will contain your map
	   // We are using a div with id="map" seen below in the <body>
	   var mapElement = document.getElementById('map');

	   // Create the Google Map using our element and options defined above
	   var map = new google.maps.Map(mapElement, mapOptions);

	   // Let's also add a marker while we're at it 70 80
	   var marker = {
		   url: '../img/mark.png',
	   };

	   // NOW CREATE THE ACTUAL MARKER ON THE MAP
	   var myMarker = new google.maps.Marker({
		   position: new google.maps.LatLng(49.842367,24.0072618),
		   map: map,
		   icon: marker
	   });
	   myMarker.addListener('click', function() {
   infowindow.open(map, myMarker);
 });

   }

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


});
