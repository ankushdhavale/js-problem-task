let textArea = document.querySelector("textarea");
let chCount = document.querySelector("#chCount");
textArea.addEventListener("input", (e) => {
	let count = e.target.value.length;
	if (e.target.value === " ") count--;
	chCount.innerHTML = count;
})