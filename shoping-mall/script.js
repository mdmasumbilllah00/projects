var catagoris = document.getElementsByClassName("catagori");
catagoris[0].addEventListener("click", function () {
    document.getElementById("display").innerHTML = ""
    var x = document.getElementById("mobile");
    var Products = x.getElementsByClassName("products");
    var dis = document.getElementById("display");
    for (var product of Products) {
        dis.innerHTML += product.innerHTML;
    }
    var atr = document.getElementById("display").attributes.getNamedItem("class");
    atr.value = "row row-cols-1 row-cols-lg-4 row-cols-md-2    g-4";
    document.getElementById("second-display").style.display = "none";

});
catagoris[1].addEventListener("click", function () {
    document.getElementById("display").innerHTML = ""
    var x = document.getElementById("laptop");
    var Products = x.getElementsByClassName("products");
    var dis = document.getElementById("display");
    for (var product of Products) {
        dis.innerHTML += product.innerHTML;
    }
    var atr = document.getElementById("display").attributes.getNamedItem("class");
    atr.value = "row row-cols-1 row-cols-lg-3 row-cols-md-2   g-4";
    document.getElementById("second-display").style.display = "none";

});
catagoris[2].addEventListener("click", function () {
    document.getElementById("display").innerHTML = ""
    var x = document.getElementById("man-shirt");
    var Products = x.getElementsByClassName("products");
    var dis = document.getElementById("display");
    for (var product of Products) {
        product.style.maxWidth = "80%";
        product.style.margin = "5px";

        dis.innerHTML += product.innerHTML;
    }
    var atr = document.getElementById("display").attributes.getNamedItem("class");
    atr.value = "row row-cols-1 row-cols-lg-4 row-cols-md-2 m-5     g-4";
    document.getElementById("second-display").style.display = "none";

});
catagoris[3].addEventListener("click", function () {
    document.getElementById("display").innerHTML = ""
    var x = document.getElementById("women-clothing");
    var Products = x.getElementsByClassName("products");
    var dis = document.getElementById("display");
    for (var product of Products) {
        product.style.maxWidth = "80%";
        product.style.margin = "5px";

        dis.innerHTML += product.innerHTML;
    }
    var atr = document.getElementById("display").attributes.getNamedItem("class");
    atr.value = "row row-cols-1 row-cols-lg-4 row-cols-md-2 m-5     g-4";
    document.getElementById("second-display").style.display = "none";

});
catagoris[4].addEventListener("click", function () {
    document.getElementById("display").innerHTML = ""
    var x = document.getElementById("man-shoes");
    var Products = x.getElementsByClassName("products");
    var dis = document.getElementById("display");
    for (var product of Products) {
        product.style.maxWidth = "80%";
        product.style.margin = "5px";

        dis.innerHTML += product.innerHTML;
    }
    var atr = document.getElementById("display").attributes.getNamedItem("class");
    atr.value = "row row-cols-1 row-cols-lg-4 row-cols-md-2 m-5     g-4";
    document.getElementById("second-display").style.display = "none";

});
catagoris[5].addEventListener("click", function () {
    document.getElementById("display").innerHTML = ""
    var x = document.getElementById("home-application");
    var Products = x.getElementsByClassName("products");
    var dis = document.getElementById("display");
    for (var product of Products) {
        product.style.maxWidth = "80%";
        product.style.margin = "5px";

        dis.innerHTML += product.innerHTML;
    }
    var atr = document.getElementById("display").attributes.getNamedItem("class");
    atr.value = "row row-cols-1 row-cols-lg-4 row-cols-md-2 m-5     g-4";
    document.getElementById("second-display").style.display = "none";

});
catagoris[6].addEventListener("click", function () {
    document.getElementById("display").innerHTML = ""
    var Products = document.getElementsByClassName("products");
    var dis = document.getElementById("display");
    var number = Math.round(Math.random() * 20)
    for (var i = number; i < Products.length; i += 8) {
        dis.innerHTML += Products[i].innerHTML;
    }
    var atr = document.getElementById("display").attributes.getNamedItem("class");
    atr.value = "row row-cols-1 row-cols-lg-3 row-cols-md-2 m-5     g-4";
    document.getElementById("second-display").style.display = "none";

});