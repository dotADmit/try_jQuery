$(function() {
    //$("#start").html("Go!");
    setTimeout(function(){
        $("#start").html("Go!")
    },1000)
    setTimeout(function(){
        $("#start").hide()
    },2000)

    var val = $("a").attr("href");
    //alert(val);

    // console.log($("a"));
});