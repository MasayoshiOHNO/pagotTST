window.onhashchange = () => {
  if (window.location.hash === '#anchor_top') {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
};


// スクロールイベント
window.addEventListener('scroll', () => {
  for (var i = 0; i < 24; ++i) {
  // visualVerticalImgのid名がつく画像を取得
  const elemImg = document.getElementById('visualVerticalImg' + i);
  //現在のスクロール位置を取得して20で除算
  let imgVerScrollY = window.scrollY/20;
  //取得したスクロール値でY値をtransform
  elemImg.style.transform = 'translateY('+ 0 + imgVerScrollY + 'px) scale(1.2)';
}
});


$(function () {
  $("a[href^='#']").on("click", function(){
      var headerHeight = $("header").outerHeight();
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "body" : href);
      var position = target.offset().top - headerHeight;
      $("html, body").animate({ scrollTop: position }, 600, "swing");
  });
});

$("#overlay-input").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#overlay").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("html").toggleClass('overlayopen');
});

$("#overlay ul li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $("#overlay-input").removeClass('active');//ボタンの activeクラスを除去し
    $("#overlay").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    $("html").removeClass('overlayopen');
});


$(function(){
    $(window).scroll(function (){

      $(".question-img01").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("slideIn");
        } else {
          $(this).removeClass("slideIn");
        }
      });

      $("h3 img.anim01").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("fadeIn");
        } else {
          $(this).removeClass("fadeIn");
        }
      });
      $("div.anim01").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("fadeIn");
        } else {
          $(this).removeClass("fadeIn");
        }
      });
      $("h3 img.anim06").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn2");
        } else {
          $(this).removeClass("fadeIn2");
        }
      });
      $("div.anim06").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn2");
        } else {
          $(this).removeClass("fadeIn2");
        }
      });

      $("li.anim02").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("slideIn2");
        } else {
          $(this).removeClass("slideIn2");
        }
      });
      $("li.anim03").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("slideIn3");
        } else {
          $(this).removeClass("slideIn3");
        }
      });
      $("li.anim04").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("slideIn4");
        } else {
          $(this).removeClass("slideIn4");
        }
      });
      $("li.anim05").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("slideIn5");
        } else {
          $(this).removeClass("slideIn5");
        }
      });

      $("li.anim07").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("slideIn7");
        } else {
          $(this).removeClass("slideIn7");
        }
      });


      $("li.anim08").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn3");
        } else {
          $(this).removeClass("fadeIn3");
        }
      });

      $("li.anim09").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn4");
        } else {
          $(this).removeClass("fadeIn4");
        }
      });
      $("li.anim10").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn5");
        } else {
          $(this).removeClass("fadeIn5");
        }
      });
      $("li.anim11").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn6");
        } else {
          $(this).removeClass("fadeIn6");
        }
      });
      $("li.anim12").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn7");
        } else {
          $(this).removeClass("fadeIn7");
        }
      });
      $("li.anim13").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn8");
        } else {
          $(this).removeClass("fadeIn8");
        }
      });


      $("li.anim14").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/3){
                  $(this).addClass("fadeIn4");
        } else {
          $(this).removeClass("fadeIn4");
        }
      });
      $("li.anim15").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/3){
                  $(this).addClass("fadeIn5");
        } else {
          $(this).removeClass("fadeIn5");
        }
      });
      $("li.anim16").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/3){
                  $(this).addClass("fadeIn6");
        } else {
          $(this).removeClass("fadeIn6");
        }
      });
      $("li.anim17").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/3){
                  $(this).addClass("fadeIn7");
        } else {
          $(this).removeClass("fadeIn7");
        }
      });


    });
  });