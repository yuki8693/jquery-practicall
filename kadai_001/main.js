$('#slick-carousel').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  fade: true,
  speed: 2000
});

$('.menu a').on('mouseover', function() {
  $(this).css('opacity', '0.5');
  $(this).css('transition', 'opacity 0.3s');
});

$('.menu a').on('mouseout', function() {
  $(this).css('opacity', '1');
  $(this).css('transition', 'opacity 0.3s');
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#back-btn').fadeIn();
  } else {
    $('#back-btn').fadeOut();
  }
});

$('#back-btn').on('click', function(e) {
  e.preventDefault();
  $('html').animate({scrollTop: 0}, 500);
});

$(window).scroll(function() {
  const aboutPosition = $('.about').scrollTop();
  const worksPosition = $('.works').scrollTop();
  if ($(window).scrollTop() > aboutPosition) {
    $('.about').addClass('active');
  }
  if ($(window).scrollTop() > worksPosition) {
    $('.works').addClass('active');
  }
});

$('.item > img').on('click', function() {
  const url = $(this).attr('src');
  $('#modal > img').attr('src', url);
  $('#modal').fadeIn();
  $('body').css('overflow', 'hidden');
});

$('#close').on('click', function() {
  $('#modal').fadeOut();
  $('body').css('overflow', 'auto');
});