$(function () {
    $("#btn").click(function () {
        $("#hello").text() === "Hello, World!" 
            ? $("#hello").text("Bye!")
            : $("#hello").text("Hello, World!");
        $("#btn").toggleClass("color");
    });
});
