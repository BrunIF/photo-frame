$(document).ready(function() {
    $(".photo-slide").find("span").hide();
 
 $(".photo-slide").hover(
    function(){
        $(this).find("span").fadeIn(1000);},
    function(){
        $(this).find("span").fadeOut(100);}
    );
    
});