$('.toggle').click(function() {
  $('.toggle, .overlay, .gnb').toggleClass('active');
})
$('.gnb a').click(function() {
  $('.toggle, .overlay, .gnb').removeClass('active');
  $.scrollTo(this.hash || 0, 900);
})