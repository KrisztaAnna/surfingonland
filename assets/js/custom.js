$('.parking').click(function () {
    $('.parking iframe').css("pointer-events", "auto");
});

$( ".parking" ).mouseleave(function() {
    $('.parking iframe').css("pointer-events", "none");
});