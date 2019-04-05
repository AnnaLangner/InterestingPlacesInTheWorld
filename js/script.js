
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