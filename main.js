import projects from "./projects.js";

const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const skillsCard = document.querySelector(".second-card");
const aboutCard = document.querySelector(".first-card");

rightArrow.addEventListener("click", () => {
    skillsCard.style.right = "85vw";
    aboutCard.style.left = "-90vw";
    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "hidden";
})

leftArrow.addEventListener("click", () => {
    skillsCard.style.right = "-90vw";
    aboutCard.style.left = "5vw";
    leftArrow.style.visibility = "hidden";
    rightArrow.style.visibility = "visible";
})

const createProjectHTML = project => {
    const isWebpage = project.webpage ? project.webpage : "#projects";
    const isGithub = project.github ? project.github : "#projects";

    return `
    <div class="project ${project.id}" data-aos="zoom-in">
        <img src=${project.image}>
        <div class="image-overlay blur">
            <h3 class="image-title">${project.title}</h3>
            <div class="close-button">x</div>
            <p class="image-description">${project.description}</p>
            <p class="tools">Tools used: ${project.tools}</p>
            <div class="image-links">
                <a href="${isWebpage}"><svg class="fas fa-desktop"></svg></a>
                <a href="${isGithub}"><svg class="fas fa-code-branch"></svg></a>
            </div>
        </div>
    </div>`
}

const printProjects = () => {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.innerHTML = "";
    projects.forEach(project => {
        projectContainer.innerHTML += createProjectHTML(project);
    })
};

printProjects(projects)

const imageOverlays = Array.from(document.querySelectorAll(".image-overlay"));
const closeButtons = Array.from(document.querySelectorAll(".close-button"));

const showOverlay = () => {
    imageOverlays.forEach(imageOverlay => {
        imageOverlay.addEventListener("click", () => {
            imageOverlays.forEach((imageOverlay) => {
                imageOverlay.style.opacity = 0;
            });
            imageOverlay.style.opacity = 1;
        });
    });
}

showOverlay();

const hideOverlay = () => {
    closeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            imageOverlays.forEach((image) => {
                image.style.opacity = 0;
            });
        })
    });
}

hideOverlay();
