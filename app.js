const title = document.querySelector(".hello h1");

console.dir(title);

function handleTitleClick() {
    title.style.color = "black";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here";
}


function handleMouseLeave() {
    title.innerText = "Mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "aqua";
}

function handleWindowCopy() {
    alert("copy paste");
}

function handleWindowOffline() {
    alert("SoS no WIFI");
}

function handleWindowOnline() {
    alert("Good");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
