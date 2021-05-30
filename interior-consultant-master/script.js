const btn_menu = document.getElementById("btn-menu")

btn_menu.addEventListener("click", toogleMenu)

function toogleMenu() {
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
}