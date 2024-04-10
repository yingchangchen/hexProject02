$(document).ready(function () {
  $(".dropdown").click(function (e) {
    e.preventDefault();
    $(".dropdown-open").slideToggle();
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
  });

  //top效果
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
