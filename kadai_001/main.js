$('#slick-carousel').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  fade: true,
  speed: 2000
});

$('.header-inner a').on('mouseover', function() {
  $(this).css('opacity', '0.5');
  $(this).css('transition', 'opacity 0.3s');
});

$('.header-inner a').on('mouseout', function() {
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

$('a').on('click', function(e) {
  const targetId = $(this).attr('href');
  if (targetId !== '#') {
    const target = $(targetId);
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 500);
  } else {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }
});

$(window).scroll(function() {
  const scrollPosition = $(window).scrollTop();
  const windowHeight = $(window).height();
  const aboutPosition = $('.about').offset().top;
  const worksPosition = $('.works').offset().top;
  if (scrollPosition + windowHeight > aboutPosition) {
    $('.about').addClass('active');
  }
  if (scrollPosition + windowHeight > worksPosition) {
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