var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');

li.forEach(element => {
	element.addEventListener('click', toggleDone);
	element.insertAdjacentElement("beforebegin",createDeleteButton());
});	

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener('click', toggleDone);
	ul.appendChild(li);
	li.insertAdjacentElement("beforebegin",createDeleteButton());

	input.value = '';
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	event.currentTarget.classList.toggle('done');
}

function deleteListItem(event) {
	ul.removeChild(event.currentTarget.nextSibling);
	ul.removeChild(event.currentTarget);
}

function createDeleteButton() {
	var itemButton = document.createElement('button');
	itemButton.innerText = 'Delete';
	itemButton.className = 'button';
	itemButton.addEventListener('click', deleteListItem);
	return itemButton;
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);
