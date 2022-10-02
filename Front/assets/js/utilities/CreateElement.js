
function Create(type, contend){

    element = document.createElement(type);
    element.appendChild(document.createTextNode(contend));

    return element;
}