function RenderScreenGet(){

    let element = document.getElementById("conteudo-principal");

    const title = CreateElement("h3", "Buscar clientes");
    const buttomGetById = CreateElement("button", "Busca cliente por id");
    const butomAllCustumers = CreateElement("button", "Busca todos os clientes");
    
    let newDiv = document.createElement("div");   
    newDiv.appendChild(title);
    newDiv.appendChild(buttomGetById);
    newDiv.appendChild(butomAllCustumers);

    element.parentNode.replaceChild(newDiv, element);
}


function CreateElement(type, contend){
    let isString = typeof contend === 'string' || contend instanceof String;

    if(!isString){
        let element = document.createElement(type);
        element.appendChild(contend);
        return element;    
    }

    let element = document.createElement(type);
    element.appendChild(document.createTextNode(contend));

    return element;
}