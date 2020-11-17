var hello = document.getElementById("hello");
var btn = document.getElementById("btn");

btn.onclick = function () {
    if (hello.textContent === "Hello, World!")
        $("#hello").html("Bye");
        else
        hello.innerHTML = "Hello, World!";
}

// $("#hello").html("Bye");