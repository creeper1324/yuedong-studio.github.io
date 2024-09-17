function ani_home() {
    let menu = document.getElementById("menu");
    menu.classList.add("home");
    menu.classList.remove("project");
    menu.classList.remove("support");
    menu.classList.remove("about");
    menu.classList.remove("news");
}

function ani_project() {
    let menu = document.getElementById("menu");
    menu.classList.remove("home");
    menu.classList.add("project");
    menu.classList.remove("support");
    menu.classList.remove("about");
    menu.classList.remove("news");
}

function ani_support() {
    let menu = document.getElementById("menu");
    menu.classList.remove("home");
    menu.classList.remove("project");
    menu.classList.add("support");
    menu.classList.remove("about");
    menu.classList.remove("news");
}

function ani_about() {
    let menu = document.getElementById("menu");
    menu.classList.remove("home");
    menu.classList.remove("project");
    menu.classList.remove("support");
    menu.classList.add("about");
    menu.classList.remove("news");
}

function ani_news() {
    let menu = document.getElementById("menu");
    menu.classList.remove("home");
    menu.classList.remove("project");
    menu.classList.remove("support");
    menu.classList.remove("about");
    menu.classList.add("news");
}

function language_select_open() {
    document.getElementById("language_option").classList.remove("open");
    document.getElementById("language_option2").classList.remove("open");
    document.getElementById("language_option3").classList.remove("open");
    document.getElementById("language_select").classList.add("open");
}

function language_select_close() {
    document.getElementById("language_option").classList.add("open");
    document.getElementById("language_option2").classList.add("open");
    document.getElementById("language_option3").classList.add("open");
    document.getElementById("language_select").classList.remove("open");
}

function switchLanguage(language) {
    var elements = document.querySelectorAll('[lang-en]');
    elements.forEach(function(element) {
        element.textContent = element.getAttribute('lang-' + language);
    });
}
document.onkeydown = function (event) {
    if (event.keyCode === 123) { // F12键的键码
      event.preventDefault();
      return false;
    }
};

document.oncontextmenu = function (event) {
    event.preventDefault();
    return false;
}

