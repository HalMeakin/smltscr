function goToPage(id) {
    window.location = "./" + id + ".html";
}

function openDropdownMenu() {
    let menu = document.getElementById("dropdownMenu");
    if (menu.style.height > "0px"){
        menu.style.height="0px"
    } else {
        menu.style.height="260px"
    }
}