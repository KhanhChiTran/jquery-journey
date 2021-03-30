//BASE on Title
// $("li").click(function (x) {
//   $("li").removeClass("selected");
//   $("section").removeClass("active");
//   $(this).addClass("selected");
//   let title = $(this)[0].innerText;
//   $("section").each(function () {
//     if ($(this).children("h3")[0].innerText === title) {
//       $(this).addClass("active");
//     }
//   });
// });

//BASE on Index

$("li").each(function (index) {
  $(this).click(function () {
    $("li").removeClass("selected");
    $("section").removeClass("active");
    $(this).addClass("selected");
    $($("section")[index]).addClass("active");
  });
});
