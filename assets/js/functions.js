$(function(){

  mentoringBubbleClick();


});


function mentoringBubbleClick(){

  $('.face').on('click',function() {

    var faceTop = $(this).position().top,
        vertMath = -1 * (faceTop - 230);

    $(this).parent().css('top', vertMath);

    $(this).addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
  });

}

$(window).scroll(function(){

  youtubeVidScroll();

});


function youtubeVidScroll(){
  var wScroll = $(window).scrollTop();
  $('.video-strip').css('background-position', 'center -'+ wScroll +'px');
};
