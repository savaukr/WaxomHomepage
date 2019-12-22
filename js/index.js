function redy() {
	function flowMenu() {
		document.querySelector('.menu-flow').classList.toggle("invisible");
		this.classList.toggle("cross");
	}

	function loadMore(){
		let div= document.createElement('div');
		alert('good');
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
		if (elem.tagName == 'BUTTON') elem.classList.add('active');
		filtr(elem, 'filtr-not-fit');
	}

	if (typeof Element.prototype.addEventListener === 'undefined') {
	    Element.prototype.addEventListener = function (e, callback) {
	      e = 'on' + e;
	      return this.attachEvent(e, callback);
	    };
	 }
/*
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
		addEventListener('click', loadMore);
	document.querySelector('.filtr').
		addEventListener('click', addActiveClass);
}
redy();
/*document.addEventListener('DOMContentLoaded', redy);*/