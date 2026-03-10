const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove",(e)=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});



setInterval(() => {
    textElement.classList.add("slide-out");

    setTimeout(() => {
        index = (index + 1) % texts.length;
        textElement.textContent = texts[index];
        textElement.classList.remove("slide-out");
    }, 500);

}, 2000);