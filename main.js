/*
All of these just point to places.
Needs rewriting to pull ElementId and use that to decide where to go.
E F F I C I E N C Y 👀

THIS WILL BE THE CORRECT FUNCTION:
*/
function goToPage(id) {
    window.location = "./" + id.toString() + ".html";
}

//Currently used functions are here!

function goToHome() {
    window.location = "./index.html";
}

function goToHistory() {
    window.location = "./history.html";
}

function goToVisit() {
    window.location = "./visit.html";
}

function goToRingingMasters() {
    window.location = "./ringingMasters.html";
}

function goToTraining() {
    window.location = "./training.html";
}

function goToContact() {
    window.location = "./contact.html";
}

function goToLinks() {
    window.location = "./links.html";
}