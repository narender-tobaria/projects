let menuOpen = document.getElementById("icon-open");
let menuClose = document.getElementById("icon-close");
let projects = document.getElementById("projects");
let floating = document.getElementById("floating");
let floatingTitle = document.getElementById("floating-title");

menuClose.style.display = "none"
projects.style.display = "none";

setTimeout(showProjectsName, 2000)

function showProjectsName(){
    floatingTitle.style.display = "flex"
}

menuOpen.onclick = function(){
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    projects.style.display = "flex";
}

menuClose.onclick = function(){
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
    projects.style.display = "none";
}