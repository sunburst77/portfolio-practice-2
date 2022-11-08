$('.close-banner').click(function() {
  $('.banner').slideUp();
})
$('.trigger').click(function() {
  $(this).toggleClass('active').parent().toggleClass('active');
  $('.sitemap').fadeToggle();
})