$(document).ready(function () {
  $(".dropdown").click(function (e) {
    e.preventDefault();
    $(".dropdown-open").slideToggle();
  });
});
