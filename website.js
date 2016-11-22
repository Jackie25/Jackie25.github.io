/*  $("menu")
}):  */
$(document).ready(function(){
$(".menu").mouseenter(function(){
    $(".menu").fadeTo("fast", 0.5);
});
mouseleave(function(){
    $(".menu").fadeTo("fast", 1);
});
