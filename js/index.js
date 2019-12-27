let json = [
	{
		typeProject:'mobile-app',
		imgSrc:'./image/main/photo6.jpg',
		alt: 'photo6',
		h3:'Usus Legentis Videntur',
		p:'Photography, Holiday'
	},
	{
		typeProject:'illustration',
		imgSrc:'./image/main/photo2.jpg',
		alt: 'Graphic Design',
		h3:'Quam Nutamus Farum',
		p:'Graphic Design, Mock-Up'
	},
	{
		typeProject:'mobile-app',
		imgSrc:'./image/main/photo6.jpg',
		alt: 'photo6',
		h3:'Usus Legentis Videntur',
		p:'Photography, Holiday'
	}

]

var pointer=0;

					
function redy() {
	function flowMenu() {
		document.querySelector('.menu-flow').classList.toggle("invisible");
		this.classList.toggle("cross");
	}

	function loadOne(jsonElem){
		let activeButton = document.querySelector('.active');
		let data = activeButton.dataset.projects;
		if (data != jsonElem.typeProject && data != 'all' ) return;
		let projects = document.querySelector('.projects');
		let div= document.createElement('div');
		div.classList.add(jsonElem.typeProject)
		let img= document.createElement('img');
		img.src = jsonElem.imgSrc;
		img.alt = jsonElem.alt;
		div.append(img);
		let description= document.createElement('div');
		description.classList.add('description');
		description.innerHTML = `<div></div><h3>${jsonElem.h3}</h3><p>${jsonElem.p}</p>`;
		div.append(description);
		projects.append(div);
		pointer++;
	}

	function loadThree(json) {
		let point = pointer;
		for (let i=point; i < json.length; i++) {
			if (pointer > point+3) return;
			if (i < json.length) {
				loadOne(json[i]);
			}
		}
	}
	
	function filtr(activeButton,className) {
		let data = activeButton.dataset.projects;
		let projects = document.querySelectorAll('.projects>div');
		for (let proj of projects) {
			if (data == 'all' ) {
				proj.classList.remove(className);
			} else if ( (proj.classList.contains(data)) && proj.classList.contains(className))  {
				proj.classList.remove(className);
			} else if (!proj.classList.contains(data)) {
				proj.classList.add(className);
			}
		}
	}

	function addActiveClass(event) {
		let elem = event.target;
		let buttons = document.querySelectorAll('.filtr button');
		for (let button of buttons) {
			button.classList.contains('active') ? button.classList.remove('active'): '';
		}
		if (elem.tagName == 'BUTTON') {
			elem.classList.add('active');
			filtr(elem, 'filtr-not-fit');
		}
	}
/*
// для IE
	if (typeof Element.prototype.addEventListener === 'undefined') {
	    Element.prototype.addEventListener = function (e, callback) {
	      e = 'on' + e;
	      return this.attachEvent(e, callback);
	    };
	 }
	 */

	document.querySelector('.menu-minimized').
		addEventListener('click', flowMenu);
	document.querySelector('#load-more').
		addEventListener('click', ()=>{loadThree(json)});
	document.querySelector('.filtr').
		addEventListener('click', addActiveClass);
}
redy();
/*document.addEventListener('DOMContentLoaded', redy);*/