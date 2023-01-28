let mainElement = document.querySelector("main");
let sistema;




function myFunction() {
    var input, filter, mainId, figureElement, figcapElement, i, txtValue;
    input = document.getElementById("input2");
    filter = input.value.toUpperCase();
    mainId = document.getElementById("main-id");
    figureElement = mainId.getElementsByTagName("figure");
    for (i = 0; i < figureElement.length; i++) {
        figcapElement = figureElement[i].getElementsByTagName("figcaption")[0];
        txtValue = figcapElement.textContent || figcapElement.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            figureElement[i].style.display = "";
        } else {
            figureElement[i].style.display = "none";
        }
    }
}

fetch("./sistema.json")
.then(response => response.json())
.then(jsonBody => {
    sistema = jsonBody;

        sistema.forEach((system, indice) => {
            const liElement = document.createElement("figure");
           
            liElement.insertAdjacentHTML("beforeend", `<img src="${system.imagens}"></img>`);
            liElement.insertAdjacentHTML("beforeend", `<figcaption>${system.name}</figcaption>`);
       
            mainElement.insertAdjacentElement("beforeend", liElement);
        });
})

