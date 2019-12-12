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

	/*document.querySelector('.menu-minimized').
		addEventListener('click', flowMenu);*/
	document.querySelector('.menu-minimized').onclick = flowMenu;
	document.querySelector('#load-more').
		addEventListener('click', loadMore);
	document.querySelector('.filtr').
		addEventListener('click', addActiveClass);
}

redy();
/*document.addEventListener('DOMContentLoaded', redy);*/
/*
					<div>
						<img src="image/main/photo1.jpg" alt="Photography, Nature">
						<div class="description">
							<div></div>
							<h3>Claritas Etiam Processus</h3>
							<p>Photography, Nature</p>
						</div>
					</div>
				*/