$(document).ready(function () {
  $(".dropdown").click(function (e) {
    e.preventDefault();
    $(".dropdown-open").slideToggle();
    $(this).toggleClass("active");
  });

  //swiper
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3500,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  //lightbox
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    maxWidth: 1000,
    maxHeight: 1000,
  });

  //top效果
  function showBtnCondition() {
    if ($(this).scrollTop() > 1200) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }
  }
  $(window).scroll(showBtnCondition);
  $(".top a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
