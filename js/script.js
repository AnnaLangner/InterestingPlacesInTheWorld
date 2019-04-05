
//implementacja karuzeli Flickity

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

var $carousel = $('.main-carousel').flickity({
	hash: true
});


var restartButton = document.querySelector('.bntRestart');

restartButton.addEventListener( 'click', function() {
  flkty.next( true );
});

var $progressBar = $('.progress-bar');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

$carousel.on( 'scroll.flickity', function( event, progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  $progressBar.width( progress * 100 + '%' );
});

