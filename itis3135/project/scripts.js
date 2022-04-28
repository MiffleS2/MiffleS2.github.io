$(document).ready(function () {
  $(function () {
    $("#tabs").tabs();
  });
  $(".intro").flipping_text({
    tickerTime: 5, // Define a time between each ticket in milliseconds. The default value is 10.
    customRandomChar: false, // You can use your own random strings by defining them here. The default value is false which will use my random string: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    tickerCount: 8, // Set the number of characters randomly shown before the real text is shown here. The default value is 10.
    opacityEffect: true, // You can toggle the opacity effect here. Set this to false if you don't want the random text to fade in. The default value is 10.
    resetOnChange: false // Toggle this to true if you want the plugin to stop and fill in all the text immediately when the user changes browser's tab. The default value is false.
  });
});