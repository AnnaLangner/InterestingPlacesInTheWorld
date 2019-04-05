
//implementacja karuzeli Flickity

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

var $carousel = $('.main-carousel').flickity();

$('.bntRestart').on( 'click', function() {
  $carousel.flickity( 'next', true );
});

var $progressBar = $('.progress-bar');

$carousel.on( 'scroll.flickity', function( event, progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  $progressBar.width( progress * 100 + '%' );
});