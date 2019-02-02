
function listItemCreate () {
	var newElem = document.createElement("div");
	newElem.classList.add("listBoxItem");
	listBox.appendChild(newElem);
	var titleInput = document.createElement("input");
	titleInput.setAttribute("type", "text");
	titleInput.setAttribute("placeholder", "Tytuł");
	titleInput.classList.add("titleInput");
	newElem.appendChild(titleInput);

	var descriptionInput = document.createElement("input");
	descriptionInput.setAttribute("type", "text");
	descriptionInput.setAttribute("placeholder", "Opis");
	descriptionInput.classList.add("descriptionInput");
	newElem.appendChild(descriptionInput);

	var btnAccept = document.createElement("button");
	btnAccept.textContent = "Potwierdź";
	btnAccept.setAttribute("class", "btnAccept");
	newElem.appendChild(btnAccept);
}

var listBox = document.querySelector("[data-item]");
var btnAction = document.querySelector(".addNew");
var localListBox = localStorage.getItem("listItemsToDo");

if (localListBox) {
	listBox.innerHTML = localListBox;
	var btnAddNew = document.querySelector(".addNew");
	btnAddNew.addEventListener("click", listItemCreate, false);
}

window.addEventListener("load", function () {
	var pageTitle = document.querySelector(".title");
	pageTitle.classList.add("titleScale");

	listBox.classList.add("listBoxScale");
}, false);

listBox.addEventListener("click", function (e) {
	if (e.target.className === "deleteTask") {
		e.target.parentElement.style.display = "none";
		localStorage.setItem("listItemsToDo", listBox.innerHTML);
	}

	if (e.target.className === "btnAccept" && e.target.parentElement.children[0].value !== "") {
		var titleValue = e.target.parentElement.children[0].value;
		var subscriptionValue = e.target.parentElement.children[1].value;

		var h2 = document.createElement("h2");
		var paragr = document.createElement("p");
		var closeSpan = document.createElement("span");

		h2.textContent = titleValue;
		paragr.textContent = subscriptionValue;
		closeSpan.textContent = "x";
		h2.classList.add("taskTitle");
		closeSpan.classList.add("deleteTask");

		while (e.target.parentNode.childElementCount > 1 && e.target.parentNode.firstChild !== e.target) {
			e.target.parentNode.firstChild.remove();
		}

		if (e.target.parentNode.childElementCount > 1 && e.target.parentNode.firstChild === e.target) {
			e.target.parentNode.lastChild.remove();
		}

		e.target.parentElement.appendChild(h2);
		e.target.parentElement.appendChild(paragr);
		e.target.parentElement.appendChild(closeSpan);

		e.target.remove();

		localStorage.setItem("listItemsToDo", listBox.innerHTML);
	} else if (e.target.className === "btnAccept" && e.target.parentElement.children[0].value === "" && e.target.parentNode.childElementCount < 4) {
        e.target.parentElement.children[0].style.boxShadow = "0 0 3px 2px red";
        var alertMessage = document.createElement("p");
		alertMessage.textContent = "proszę podać tytuł";
		alertMessage.style.color = "red";
		e.target.parentElement.appendChild(alertMessage);
	}
    
}, false);

btnAction.addEventListener("click", listItemCreate, false);

