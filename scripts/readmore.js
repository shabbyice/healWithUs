function showMore() {

    if ($("#p3").hasClass("more")) {
        $("#p3, #p4").removeClass("more");
        $("#readmore").text('Read Less');

      } else {
        $("#p3, #p4").addClass("more");
        $("#readmore").text('Read More');
      }
}

$("#readmore").click(function() {

    showMore();
});
