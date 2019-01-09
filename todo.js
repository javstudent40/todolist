
//UI Variables
const form = document.querySelector('#todo-form');
const uList = document.querySelector('.ul-list');
const listInput = document.querySelector('#task');
const clearButton = document.querySelector('.clr-btn');
const complete = document.querySelector('#complete');

//Value for "tasks completed input field"
complete.value = 0;



loadEventListeners();

function loadEventListeners() {
	form.addEventListener('submit', addTask);
	clearButton.addEventListener('click', clearTasks);
	uList.addEventListener('click', deleteTask);
	document.addEventListener('DOMContentLoaded', getTasks);
}



function addTask(e) {
	//Create li element
	const li = document.createElement('li');
	//Applies css to li element from 'list-properties'
	li.className = 'list-properties';
	//Creates text content for list element
	li.appendChild(document.createTextNode(listInput.value));
	// Creates button element
	const icon = document.createElement('button');
	//Applies bootstrap css to button
	icon.className = 'del-btn'
	//Styles button and adds "Delete" inside
	icon.innerHTML = '<button type="button" class="btn btn-outline-primary">Delete</button>'
	//Button appended to list element
	li.appendChild(icon);
	//Appends li element to unordered list
	uList.appendChild(li);

	//Calls function to persist data to local storage
	storeInLocalStorage(listInput.value);
	//Increments tasks competed value each time task is added
	complete.value ++;
	//Clears input field for new task
	listInput.value = '';


	e.preventDefault();
}

//Create function to persist added tasks to local storage
function storeInLocalStorage(task) {
	let tasks;
	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks() {
	uList.innerHTML = '';
	complete.value = 0;

	clearTasksFromLocalStorage();
}

function deleteTask(e) {
	if(e.target.parentElement.classList.contains('del-btn')) {
		e.target.parentElement.parentElement.remove();

		removeTaskFromLocalStorage(e.target.parentElement.parentElement);
	}

	complete.value --;
}

function removeTaskFromLocalStorage(taskItem) {
	let tasks;
	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach(function(task, index) {
		if(taskItem.firstChild.textContent === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
	let tasks;
	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function(task) {
	const li = document.createElement('li');
	li.className = 'list-properties';
	li.appendChild(document.createTextNode(task));
	const icon = document.createElement('button');
	icon.className = 'del-btn'
	icon.innerHTML = '<button type="button" class="btn btn-outline-primary">Delete</button>'
	li.appendChild(icon);
	uList.appendChild(li);

	});

}

function clearTasksFromLocalStorage() {
	localStorage.clear();
}
