var menu = document.querySelector("menu");
var nav = document.querySelector("nav");
let items = document.querySelector(".return");
var loader = document.querySelector("#loader");
let vtview = window.innerWidth;
let hrview = window.innerHeight;
let main = document.querySelector("main");
let child = document.querySelector(".child");
var num =0;
let item =document.getElementById("scroll");
window.onload = function() {
    main.appendChild(child)
}
function pageSystem() {
    let container = document.querySelector(".container");
    let main = document.querySelector("main");
    let header = document.querySelector("header");
    if (container.scrollTop >100) {
        header.className = "header";
        main.style.overflow = "scroll";
        main.style.paddingTop = "20px";

    } else if (container.scrollTop <50) {
        header.className = "";
        main.style.overflow = "hidden";
    }
}
menu.addEventListener("click", function() {
    nav.style.left = "0%";
});
function closeNav(n) {
    nav.style.left = "-90%";
    switch (n) {
        case 1:
            location.replace("AppSharYu/App Sharyu.html");
            break;

        case 2:
            location.replace("https://www.telenor.com.mm/my/personal/astrology");
            break;
        case 3:
            location.replace("https://www.telenor.com.mm/my/personal/gaming-and-entertainment");
            break;
        case 4:
            location.replace("https://www.telenor.com.mm/my/about");
            break;
        case 5:
            location.replace("https://www.telenor.com.mm/my/about/sustainability");
            break;
        case 6:
            location.replace("https://www.telenor.com.mm/my/about/media-home");
            break
        case 9:
            location.replace("ContactUs.html");
            break;
    }
    if (n > 0) {
        loader.innerText = "connecting...";
        loader.className = "loader";
    }
}
function lens() {
    location.replace("https://www.search_items.html");
}
//document.querySelector(".container").scrollTop=400
 let no = 0;
        mthfun(no);

        function addNo() {
            mthfun(no += 1);
            if (no == 2) {
                no=-1;
            }
        }
        function mthfun(n) {
            var ctx = document.getElementsByClassName("item");
            for (var i = 0; i < ctx.length; i++) {
                ctx[i].style.display = "none"
            }
            ctx[n].style.display = "block";
        }
