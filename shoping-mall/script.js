var catagoris = document.getElementsByClassName("catagori");
catagoris[0].addEventListener("click", function () {
    var x = document.getElementById("mobile").innerHTML;
    document.getElementById("display").innerHTML = x;
    document.getElementById("second-display").style.display = "none";

});
catagoris[1].addEventListener("click", function () {
    var x = document.getElementById("laptop").innerHTML;
    document.getElementById("display").innerHTML = x;
    document.getElementById("second-display").style.display = "none";
});
catagoris[2].addEventListener("click", function () {
    alert("shirt")
});
catagoris[3].addEventListener("click", function () {
    alert("dress")
});
catagoris[4].addEventListener("click", function () {
    alert("shoe")
});
catagoris[5].addEventListener("click", function () {
    alert("home-application")
});
