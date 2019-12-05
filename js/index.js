function flowMenu() {
	document.querySelector('.menu-flow').classList.toggle("invisible");
	this.classList.toggle("cross");
	
}
let burger = document.querySelector('.menu-minimized').
	addEventListener('click', flowMenu);
