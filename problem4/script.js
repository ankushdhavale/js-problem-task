let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let h3 = document.querySelector("h3");

let inter;
start.addEventListener("click", () => {
    let count = 0;
    inter = setInterval(() => {
        h3.textContent = count;
        count++;
        console.log(count);
        
    },1000)
})

stop.addEventListener("click", () => {
    clearInterval(inter);
})