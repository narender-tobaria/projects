
// >>>>>>>>>>> function for creating new single project 
function createNewProject(projectLink,imageLink,name){
    // project show box
    let projectShowBox = document.createElement('div');
    projectShowBox.classList = "project_show_box"

    let a = document.createElement('a');
    a.setAttribute("href",`${projectLink}`);

    let image = document.createElement('img');
    image.classList = "project_thumbnail_img"
    image.setAttribute('src',`${imageLink}`)

    let projectName = document.createElement('h4');
    projectName.classList = "project_name"
    let nameText = document.createTextNode(`${name}`);
    projectName.appendChild(nameText)

    projectShowBox.appendChild(a);
    a.appendChild(image);
    projectShowBox.appendChild(projectName);

    return projectShowBox
}

// >>>>>>>>>>> floating icon by adding all the projects in it
function createFloatingIcon(){

    let aLink = "../../web-dev-projects";
    let imgLink = "../../assets";

    let floatingDiv = document.getElementById("floating-icon");
    // Projects display Part
    projectScrollViewBox = document.createElement('div');
    projectScrollViewBox.id = "projects";
    projectScrollViewBox.classList = "projects-scroll-view"

    floatingDiv.appendChild(projectScrollViewBox);

    // About Me
    let aboutMe = createNewProject(`${aLink}/about-me/`,`${imgLink}/my.jpg`,"About Me");
    projectScrollViewBox.appendChild(aboutMe);

    // Password Authenticator
    let passAuth = createNewProject(`${aLink}/password-authenticator/`,`${imgLink}/auth_img.jpg`,"Password Authenticator");
    projectScrollViewBox.appendChild(passAuth);

    // Google Clone
    let googleClone = createNewProject(`${aLink}/google-clone/`,`${imgLink}/google_clone.jpg`,"Google Clone");
    projectScrollViewBox.appendChild(googleClone);

    // Delicious Apples
    let deliciousApples = createNewProject(`${aLink}/delicious-apples/`,`${imgLink}/delicious_apples.jpg`,"Delicious Apples");
    projectScrollViewBox.appendChild(deliciousApples);

    // Tic Tac Toe Game
    let ticTacToe = createNewProject(`${aLink}/tic-tac-toe-game/`,`${imgLink}/tic-tac-toe-game.jpg`,"Tic Tac Toe Game");
    projectScrollViewBox.appendChild(ticTacToe);

    // Order Status Management
    let orderStatusManagement = createNewProject(`${aLink}/order-status-management-system/`,`${imgLink}/order-status-management.jpg`,"Order Status Management");
    projectScrollViewBox.appendChild(orderStatusManagement);

    // To Do App
    let toDoApp = createNewProject(`${aLink}/to-do-app/`,`${imgLink}/to-do-app.jpg`,"To Do App");
    projectScrollViewBox.appendChild(toDoApp);

    // RCMCAL
    let rcmcal = createNewProject("https://play.google.com/store/apps/details?id=rcmcal.poscal.in",`${imgLink}/rcmcal.jpg`,"RCMCAL");
    projectScrollViewBox.appendChild(rcmcal);
    


    // >>>>>>>>>>> animation part
    let floatingTitle = document.createElement('h3');
    floatingTitle.id = "floating-title";
    floatingTitle.innerText = "Projects"

    let closeIcon = document.createElement('span');
    closeIcon.classList = "material-symbols-outlined menu-icon";
    closeIcon.id = "icon-close";
    closeIcon.innerText = "close"

    let doubleUpIcon = document.createElement('span');
    doubleUpIcon.classList = "material-symbols-outlined menu-icon";
    doubleUpIcon.id = "icon-open";
    doubleUpIcon.innerText = "keyboard_double_arrow_up"

    floatingDiv.appendChild(floatingTitle);
    floatingDiv.appendChild(closeIcon);
    floatingDiv.appendChild(doubleUpIcon);

    return floatingDiv
}
// Floating Icon Output
createFloatingIcon();

let menuOpen = document.getElementById("icon-open");
let menuClose = document.getElementById("icon-close");
let projects = document.getElementById("projects");
let floating = document.getElementById("floating");
let floatingTitle = document.getElementById("floating-title");
let iframe = document.getElementById

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













