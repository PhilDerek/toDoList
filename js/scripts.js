
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

window.addEventListener("load", function () {
    var pageTitle = document.querySelector(".title");
    pageTitle.classList.add("titleScale");

    listBox.classList.add("listBoxScale");
}, false)

var listBox = document.querySelector("[data-item]");

var btnAction = document.querySelector(".addNew");

listBox.addEventListener("click", function (e) {
    if (e.target.className === "deleteTask") {
        e.target.parentElement.style.display = "none";
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
    } else if (e.target.className === "btnAccept" && e.target.parentElement.children[0].value === "" && e.target.parentNode.childElementCount < 4) {
        var alertMessage = document.createElement("p");
        alertMessage.textContent = "proszę podać przynajmniej tytuł";
        alertMessage.style.color = "red";
        e.target.parentElement.appendChild(alertMessage);
    }
    
}, false)


btnAction.addEventListener("click", listItemCreate, false);

