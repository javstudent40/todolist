const form = document.querySelector('#todo-form');
const uList = document.querySelector('.ul-list');
const listInput = document.querySelector('#task');
const clearButton = document.querySelector('.clr-btn');
const complete = document.querySelector('#complete');

complete.value = 0;


loadEventListeners();

function loadEventListeners() {
	form.addEventListener('submit', addTask);
	clearButton.addEventListener('click', clearTasks);
}



function addTask(e) {
	const li = document.createElement('li');
	li.className = 'list-properties';
	li.appendChild(document.createTextNode(listInput.value));
	uList.appendChild(li);
	complete.value ++;
	listInput.value = '';


	e.preventDefault();
}

function clearTasks() {
	uList.innerHTML = '';
}

