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
		img.addEventListener('click', popap);
		div.appendChild(img);
		let description= document.createElement('div');
		description.classList.add('description');
		description.innerHTML = "<div></div><h3>" + jsonElem.h3 + "</h3><p>" + jsonElem.p + "</p>";
		div.appendChild(description);
		projects.appendChild(div);
		pointer++;
	}
	function popap(e) {
		let popap = document.createElement('div');
		popap.classList.add('modal');
		let modalContent= document.createElement('div');
		modalContent.classList.add('modal-content');
		modalContent.style.background= "url("+e.target.src+")";
		modalContent.style.backgroundSize = 'cover';
		let span = document.createElement('span');
		span.classList.add('close');
		span.innerHTML = '&times';
		span.addEventListener('click', function(e){
			let elem=e.target.parentNode.parentNode;
			elem.parentNode.removeChild(elem);
		});
		modalContent.appendChild(span);
		popap.appendChild(modalContent);
		let container = document.getElementById('container');
		container.appendChild(popap);
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
		for (let i=0; i < projects.length; i++) {
			if (data == 'all' ) {
				projects[i].classList.remove(className);
			} else if ( (projects[i].classList.contains(data)) && projects[i].classList.contains(className))  {
				projects[i].classList.remove(className);
			} else if (!projects[i].classList.contains(data)) {
				projects[i].classList.add(className);
			}
		}
	}

	function addActiveClass(event) {
		let elem = event.target;
		let buttons = document.querySelectorAll('.filtr button');
		for (let i=0; i < buttons.length; i++) {
			buttons[i].classList.contains('active') ? buttons[i].classList.remove('active'): '';
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
/*
	 let el = document.querySelector('.menu-minimized')
		if (el.addEventListener){
  			el.addEventListener('click', flowMenu); 
		} else if (el.attachEvent){
  			el.attachEvent('onclick', flowMenu);
		};
	let el1 = document.querySelector('#load-more')
		if (el.addEventListener){
  			el1.addEventListener('click', ()=>{loadThree(json)}); 
		} else if (el1.attachEvent){
  			el1.attachEvent('onclick', ()=>{loadThree(json)});
		}
*/

	let projectsImg = document.querySelectorAll('.projects img');
	for (let i=0; i< projectsImg.length; i++) {
		projectsImg[i].addEventListener('click', popap);
	}

	document.querySelector('.menu-minimized').
		addEventListener('click', flowMenu);
	document.querySelector('#load-more').
		addEventListener('click', function(){loadThree(json)});
	document.querySelector('.filtr').
		addEventListener('click', addActiveClass);

}

document.addEventListener('DOMContentLoaded', redy);