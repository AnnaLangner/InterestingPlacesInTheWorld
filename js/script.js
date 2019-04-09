'use strict';
(function(){ 

var templateSlide = document.getElementById('template-carousel-slide').innerHTML;

Mustache.parse(templateSlide);

var listSlide = '';

for(var i = 0; i < carouselData.length; i++){
	console.log(carouselData[i]);
	listSlide += Mustache.render(templateSlide, carouselData[i]);
}


var carousel = document.querySelector('.main-carousel');

carousel.innerHTML += listSlide;

var flkty = new Flickity( carousel, {
  cellAlign: 'left',
  contain: true,
  imagesLoaded: true,
  percentPosition: false,
  hash: true,
});


var restartButton = document.querySelector('.bntRestart');

restartButton.addEventListener( 'click', function() {
  flkty.next( true );
  flkty.select( 0 );
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// Initialize and add the map
window.initMap = function() {
		
	var	map = new google.maps.Map(document.getElementById('map'), {
	  	center: carouselData[0].coords,
	  	zoom: 8
	});

	carouselData.forEach(function(item) {
		var marker = new google.maps.Marker({
			position: item.coords,
			map: map
		});
		marker.addListener('click', function(){
			flkty.next( true );
  			flkty.select( item );
		});		
	});
}

})(); 