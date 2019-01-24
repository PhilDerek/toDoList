function closeListItem () {
    var allCloseSpans = document.querySelectorAll(".deleteTask");
    for (var i = 0; i < allCloseSpans.length; i++) {
        allCloseSpans[i].addEventListener("click", function () {
            this.parentElement.style.display = "none";
        })
    }
}


function newElemCreateMainFunc () {
    var newElem = document.createElement("div");
    newElem.classList.add("addedNewListTask");
    listBox.appendChild(newElem);
    var inputForH2;
    var inputForP;
    var btnAccept;
    function inputStage () {
        inputForH2 = document.createElement("input");
        inputForH2.setAttribute("type", "text");
        inputForH2.setAttribute("placeholder", "Tytuł");
        newElem.appendChild(inputForH2);

        inputForP = document.createElement("input");
        inputForP.setAttribute("type", "text");
        inputForP.setAttribute("placeholder", "Opis");
        newElem.appendChild(inputForP);

        btnAccept = document.createElement("button");
        btnAccept.textContent = "Potwierdź";
        btnAccept.setAttribute("id", "btnAccept");
        newElem.appendChild(btnAccept);
    }
    inputStage();

    function FinalListItemAndClose () {
        btnAccept.addEventListener("click", function () {
            var input1Value = inputForH2.value;
            var input2Value = inputForP.value;

            var h2 = document.createElement("h2");
            var paragr = document.createElement("p");
            var closeSpan = document.createElement("span");

            h2.textContent = input1Value;
            paragr.textContent = input2Value;
            closeSpan.textContent = "x";
            h2.classList.add("taskTitle");
            closeSpan.classList.add("deleteTask");

            newElem.removeChild(inputForH2);
            newElem.removeChild(inputForP);
            newElem.removeChild(btnAccept);

            newElem.appendChild(h2);
            newElem.appendChild(paragr);
            newElem.appendChild(closeSpan);
            
            closeListItem();
        })
    }
    FinalListItemAndClose();
}


var listBox = document.querySelector("[data-item]");

var btnAction = document.querySelector(".addNew");

window.addEventListener("load", function () {
    var pageTitle = document.querySelector(".title");
    pageTitle.classList.add("titleScale");

    listBox.classList.add("listBoxScale");
})

closeListItem();

btnAction.addEventListener("click", newElemCreateMainFunc);

