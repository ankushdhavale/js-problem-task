let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let li;

add.addEventListener("click",() => {
    if (inp.value.trim() === '') {alert("Please Enter Value in input") }
    else {
        li = document.createElement('li');
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = "";
    }
})


remove.addEventListener("click", () => {
    ul.removeChild(ul.firstElementChild);
})


