$("h1").click(function(){
    $("h1").css("font-size", "5rem");
    $("h1").css("color", "red");    
})
$("input").keypress(function(event){
    $("h1").html("<em>"+ event.key +"</em>")
})