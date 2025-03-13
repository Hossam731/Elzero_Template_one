let links = document.querySelector(".links i")
links.addEventListener("click", function () {
    let menu = document.querySelector(".links ul")
    if (menu.style.display === "none") {
        menu.style.display = "block"
    }
    else {
        menu.style.display = 'none';
    }
})