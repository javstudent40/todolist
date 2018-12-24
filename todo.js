const form = document.querySelector('#todo-form');
const uList = document.querySelector('.ul-list');
const listInput = document.querySelector('#task');


loadEventListeners();

function loadEventListeners() {
	form.addEventListener('submit', addTask);
}



function addTask(e) {
	const li = document.createElement('li');
	li.className = 'list-properties';
	li.appendChild(document.createTextNode(listInput.value));
	uList.appendChild(li);
	listInput.value = '';

	e.preventDefault();
}

