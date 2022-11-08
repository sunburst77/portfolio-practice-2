// $('.item').mouseenter(function(){
//   $(this).children('.item-desc').show();
// })
// $('.item').mouseleave(function(){
//   $(this).children('.item-desc').hide();
// })
// $('.item').mouseenter(function(){
//   $(this).children('.item-desc').slideDown();
// })
// $('.item').mouseleave(function(){
//   $(this).children('.item-desc').slideUp();
// })
$('.item').mouseenter(function(){
  $(this).children('.item-desc').stop().fadeIn();
})
$('.item').mouseleave(function(){
  $(this).children('.item-desc').stop().fadeOut();
})