
window.addEventListener("scroll" , function () {
	var header = document.querySelector("header");
	header.classList.toggle("magic",window.scrollY > 0);
})

function funcionuno(){
	location.href = "index.html";
	window.open();
}

function funciondos(){
	location.href = "../Steel Frame/index.html";
}

function funciontres(){
	location.href = "../Calculadora/calculadoraweb.html";
}