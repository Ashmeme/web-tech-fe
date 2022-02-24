$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
    $('navbar').css('background','transparent');
} 
else {
    $('navbar').css('background','red');
    }
});