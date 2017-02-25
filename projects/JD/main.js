/*artSlides*/
$(function(){
    $(".artSlides").slidesjs({
      width: 730,
      height: 454,
      navigation: false,
       play: {
          active: true,
            // [boolean] Generate the play and stop buttons.
            // You cannot use your own buttons. Sorry.
          effect: "slide",
            // [string] Can be either "slide" or "fade".
          interval: 3000,
            // [number] Time spent on each slide in milliseconds.
          auto: true,
            // [boolean] Start playing the slideshow on load.
          swap: true,
            // [boolean] show/hide stop and play buttons
          pauseOnHover: true,
            // [boolean] pause a playing slideshow on hover
          restartDelay: 2500
            // [number] restart delay on inactive slideshow
        }
    });
});
/*recommend-slider*/
$(function(){
  $(".recommend-slider").slidesjs({
      width: 1000,
      height: 164,
      pagination: false,
      navigation: {
          active: false,
          effect: "slide"
      }
  });
});

/*goTop*/
$.clickGoTop = function(node){

  var $node = $(node);
  $node.click(function(){
    $('body').stop(true,true).animate({scrollTop: 0})
  })

}
$.clickGoTop($('.gototop'))

/*news-iframe*/
$('.hasframe').on('mouseenter',function(e){
  popout(e);
})  
$('.closeframe').on('click',function(e){
  $('.hasframe').off('mouseenter');
  $('.iframe-recharge').stop(true,true).animate({top: '210px'},500,function(){
    setTimeout(function(){
      $('.hasframe').on('mouseenter',function(e){
        popout(e)
      })  
    },0);
  })
})
$('.iframe-button').on('mouseenter',function(e){
  $('.iframe-content.active,.iframe-button.active').removeClass('active')
  $(this).addClass('active')      
    $(this).next('.iframe-content').addClass('active')
    console.log(this)
})
function popout(e){
  var $current = $(e.currentTarget)
  var index = $current.attr('data-index')
  var indexNumber = +index  
  $('.iframe-content.active,.iframe-button.active').removeClass('active')
  $('.iframe-button').eq(indexNumber).addClass('active')
  $('.iframe-content').eq(indexNumber).addClass('active')
  $('.iframe-recharge').animate({top: '0px'},500)
}
