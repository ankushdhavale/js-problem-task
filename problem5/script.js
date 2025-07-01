let divs = document.querySelectorAll(".tab");
let texts = document.querySelectorAll("h3");

texts[0].style.display = "block";
texts[0].style.width = "50%";

divs.forEach((div, index) => {
    div.addEventListener("click", () => {
        allTextNone();
        texts[index].style.display = "block";
        texts[index].style.width = "50%";
    })
})

const allTextNone = () => {
    texts.forEach((text) => {
        text.style.display = "none";
    })
}