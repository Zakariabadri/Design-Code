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
  startMentoring();

});


function youtubeVidScroll(){
  var wScroll = $(window).scrollTop();
  $('.video-strip').css('background-position', 'center -'+ wScroll +'px');
};

function startMentoring(){

  var wScroll = $(window).scrollTop(),
      sMentoring = $('section.mentoring').offset().top;

  if( sMentoring - 500 < wScroll){

    $('.faces').addClass('launched');
    setTimeout(function(){
      $('.face:nth-child(3)').addClass('has-bubble-open');
    }, 400);
    
  }

};
