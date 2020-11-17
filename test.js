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

function send(){
    $("#d").html("Hello ").append($("#name").val());
}