(function($) {
$(function() {
  $('ul.tabs_caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
  });
});
})($);

$(function(){
$("#gallery a").lightBox({
    imageLoading: 'gallery/lightbox-ico-loading.gif',
    imageBtnClose: 'gallery/lightbox-btn-close.gif',
    imageBtnPrev: 'gallery/lightbox-btn-prev.gif',
    imageBtnNext: 'gallery/lightbox-btn-next.gif',
    containerResizeSpeed: 100
   });
});

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(function(f){
    f(window).scroll(function(){
        f('#button_up')['fade'+ (f(this).scrollTop() > 500 ? 'In': 'Out')](500);          
    });
});

$(document).ready(function(){
    $("#form").submit(function() {
        var form_data = $(this).serialize();
        $.ajax({
        type: "POST",
        url: "send.php",
        data: form_data,
        success: function() {
            alert("Your message was successfully sent");
        }
        });
    }); 
}); 

$(document).ready(function () {
    $('#menu').click(function () {
        $('.nav_menu').slideToggle('medium');
    });
});
