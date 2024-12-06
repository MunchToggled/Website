$(".mobile-menu").click(function(){
    
   $("header nav ul").toggleClass('show'); 
});

var navOffset = $('#steps').offset().top;

$(window).scroll(function(){
    
    var scrollPos = $(window).scrollTop();
    
    if (scrollPos > navOffset) {
        
        $("nav").css("background-color", "292E37");
    }
    
    else { 
        
        $("nav").css("background-color", "");
    
    }     
    
});