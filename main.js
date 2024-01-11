function goToPage(id) {
    window.location = "./" + id + ".html";
}

function openDropdownMenu(id) {
    let menu = document.getElementById("dropdownMenu");
    let btn = document.getElementById(id);
    let icon = btn.firstElementChild;
    icon.style.transition="all .3s ease-in-out";
    if (menu.style.height > "0px"){
        menu.style.height="0px";
        btn.style.backgroundColor="";
        icon.style.color="";
        icon.style.transform="rotate(0deg)"
    } else {
        btn.style.backgroundColor="white";
        icon.style.color="rgb(22, 156, 246)";
        icon.style.transform="rotate(-90deg)"
        menu.style.height="260px";
    }
}

function moInteraction(id) {
    let btn = document.getElementById(id);
    let icon = btn.firstElementChild;

    if(!icon.classList.contains("fa-flip")) {
        icon.classList.add("fa-flip");
    };
}

function moInteractionRemove(id) {
    let btn = document.getElementById(id);
    let icon = btn.firstElementChild;

    if(icon.classList.contains("fa-flip")) {
        icon.classList.remove("fa-flip");
    };
}