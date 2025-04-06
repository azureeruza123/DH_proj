/*--- top_slider ---*/
$(function () {
  $(".top_slider").slick({
    autoplay: true,
    arrows: false,
    asNavFor: ".thumbnail",
    fade: true,
  });
  $(".thumbnail").slick({
    slidesToShow: 3,
    asNavFor: ".top_slider",
    focusOnSelect: true,
    arrows: true,
  });
});

/*--- top_therapist_slider ---*/
$(function () {
  $('.therapist_slider').slick({
      slidesToShow: 4,
      arrows: false,
      speed: 600,
      dots: true,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });
});

/*--- profile_slider ---*/
$(function(){
  var slider = "#profile_img_main"; // スライダー
  var thumbnailItem = "#profile_img_thumb .thumbnail-item"; // サムネイル画像アイテム
  
  $(thumbnailItem).each(function(){
   var index = $(thumbnailItem).index(this);
   $(this).attr("data-index",index);
  });
  
  $(slider).on('init',function(slick){
   var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
   $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
  });

  $(slider).slick({
    autoplay: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "calc(100% / 3)",
      responsive: [
        {
        breakpoint: 768,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  });

  $(thumbnailItem).on('click',function(){
    var index = $(this).attr("data-index");
    $(slider).slick("slickGoTo",index,false);
  });
  
  $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
    $(thumbnailItem).each(function(){
      $(this).removeClass("thumbnail-current");
    });
    $(thumbnailItem+'[data-index="'+nextSlide+'"]').addClass("thumbnail-current");
  });
});
// $(function () {
//   $('.profile_slider').on('init', function (event, slick, currentSlide, nextSlide) {
//     slideItem=$(".slick-slide")
//     for(let i=0; i < slick.slideCount; i++){
//       let slideImg = slideItem.filter(function(){return($(this).data('slick-index') === i)}).find("img").clone()
//       let dot = $(".slick-dots").find("li").eq(i).find("button")
//       let src = slideImg.attr('src')
//       dot.css("background",`url(${src})`)
//       dot.css("background-size","cover")
//       dot.css("background-position","50% 50%")
//       dot.css("background-repeat","no-repeat")
//     }
//   });
//   $('.profile_slider').slick({
//       speed: 500,
//       dots: true,
//       arrows: false,
//       infinite: true,
//   });
// });

/*--- PC scroll add class ---*/
$(window).scroll(function () {
  if($(window).scrollTop() > 250) {
    $('body').addClass('header_fixed');
  } else {
    $('body').removeClass('header_fixed');
  }
});
$(window).on("scroll", function(){
    $(".globalnavi_wrapper").css("left", -$(window).scrollLeft());
});

/*--- totop ---*/
$(function() {
  var topBtn = $('#totop'); 
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
    });
});

/*--- sp globalnavi ---*/
$(function() {
  $('.sp_menubtn').click(function(){
    $(this).toggleClass('active');
    $(".globalnavi_wrapper").toggleClass('menu_open');
  });
  $('.closeBtn').click(function(){
    $(".sp_menubtn").toggleClass('active');
    $(".globalnavi_wrapper").toggleClass('menu_open');
  });
  $('.globalmenu a').click(function(){
    $(".sp_menubtn").toggleClass('active');
    $(".globalnavi_wrapper").toggleClass('menu_open');
  });
});

/*--- accordion ---*/
$(function(){
  $(".acDown").on("click", function() {
    $(this).next().slideToggle();
  });
});


/*--- smoothscroll ---*/
/*ページ外スクロール*/
//URLのハッシュ値を取得
var urlHash = location.hash;
var header_size = 60;
//ハッシュ値があればページ内スクロール
if(urlHash) {
//スクロールを0に戻す
  $('body,html').stop().scrollTop(0);
  setTimeout(function () {
    //ロード時の処理を待ち、時間差でスクロール実行
    scrollToAnker(urlHash) ;
  }, 100);
}
function scrollToAnker(hash) {
  var target = $(hash);
  var position = target.offset().top-header_size;
  $('body,html').stop().animate({scrollTop:position}, 500);
}

/*ページ内スクロール*/
$('a[href*="#"]').on('click', function () {
  var href = $(this).attr("href").substr( $(this).attr("href").indexOf('#') );
  var target = $(href == "#" || href == "" ? 'html' : href);
  if(target!=undefined){
    var position = target.offset().top-header_size;
    $("html, body").animate({scrollTop: position}, 500, "swing");
  }
  return false;
});
