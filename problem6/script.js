let inp = document.querySelector("input");
let data = [
    {name:"harsh",src:"https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"harshita",src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"harshika",src:"https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"shyam",src:"https://plus.unsplash.com/premium_photo-1722859288966-b00ef70df64b?q=80&w=1403&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

let pers = "";
data.forEach((elem) => {
    pers += `<div class="person">
				<div class="img">
					<img src=${elem.src} alt="">
				</div>
					<h4>${elem.name}</h4>
			</div>`;
})
document.querySelector(".people").innerHTML = pers;


inp.addEventListener("input", (e) => {
	let matching = data.filter((elem) => {
		return elem.name.startsWith(inp.value);
	});
    
    let newUser = "";
	matching.forEach((elem) => {
		newUser += `<div class="person">
				<div class="img">
					<img src=${elem.src} alt="">
				</div>
					<h4>${elem.name}</h4>
			</div>`;
	});
    document.querySelector(".people").innerHTML = newUser;
    
    if (matching.length <= 0) {
        document.querySelector(".people").innerHTML = "User Not Found";
    }
});

