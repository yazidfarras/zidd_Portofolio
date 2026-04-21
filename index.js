const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove",(e)=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* Hamburger Menu Toggle */
const hamburgerMenu = document.getElementById("hamburgerMenu");
const mobileNavMenu = document.getElementById("mobileNavMenu");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  mobileNavMenu.classList.toggle("active");
});

/* Close menu when clicking on a link */
mobileNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    mobileNavMenu.classList.remove("active");
  });
});

setInterval(() => {
    textElement.classList.add("slide-out");

    setTimeout(() => {
        index = (index + 1) % texts.length;
        textElement.textContent = texts[index];
        textElement.classList.remove("slide-out");
    }, 500);

}, 2000);

function login() {
  alert("terimakasih");
}
