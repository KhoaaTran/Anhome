const mobie_nav = document.querySelector("#mobile-nav");
mobie_nav.addEventListener("click", function (e) {
    const menu_mobie = e.target.closest(".menu-inner");
    const menu_checkbox = menu_mobie.previousElementSibling;
    if (menu_checkbox) {
        menu_checkbox.checked = false;
    }
});
