$(document).ready(function(){
  var image, count = 0, cache = [];
  $("#slides img").each(function() {
    image = new Image();
    image.src = $(this).attr("src");
    cache[count]= image;
    count++;
  });
  count = 0;
  var nextImage;
  setInterval(function() {
    $("#slide").fadeOut(1000, function() {
      count = (count + 1) % cache.length;
      nextImage = cache[count];
      $("#slide").attr("src", nextImage.src).fadeIn(1000);
    });
  }, 3000);
});