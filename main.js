$("#nav-btn").click(function(){
    $(this).toggleClass("show");
    $("#sidebar").toggleClass("show");
    console.log("Clicked");
})
AOS.init();
