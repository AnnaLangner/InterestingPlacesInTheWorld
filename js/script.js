'use strict';
(function(){ 

var carousel = document.querySelector('.main-carousel');
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
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});


var templateSlide = document.getElementById('template-carousel-slide').innerHTML;

Mustache.parse(templateSlide);

var listSlide = '';

for(var i = 0; i < carouselData.length; i++){
	console.log(carouselData[i]);
	listSlide += Mustache.render(templateSlide, carouselData[i]);

}

results.innerHTML = listSlide;

})(); 