function toggle() {

    var menu = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".nav");
    var icon = document.querySelector(".icon");


    if (!(menu.className === "menu-toggle active" && nav.className === "nav responsive")) {

        menu.className = "menu-toggle active";

        nav.className = "nav responsive";

        icon.className = "icon active";

    } else {

        menu.className = "menu-toggle";

        nav.className = "nav";

        icon.className = "icon";

    }

    nav.onmouseleave = function() {
        menu.className = "menu-toggle";

        nav.className = "nav";

        icon.className = "icon";
    }
}