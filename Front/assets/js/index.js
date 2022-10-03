function RenderHome(){
    let element = document.getElementById("conteudo-principal");

    const text = CreateElement("p", "Gerencie seus clientes com o Customer Management");

    const img = document.createElement("img");
    img.classList.add("image-home");
    img.setAttribute("src", "../imgs/managerHomePage.jpeg");
    img.setAttribute("alt", "Gerenciando seus clientes");

    const divPrincipalHome = CreateElement("div", [img, text], "class", "conteudo-principal-home");

    let divPrincipal = 
    CreateElement("div", [divPrincipalHome], "id", "conteudo-principal");

    element.parentNode.replaceChild(divPrincipal, element);
}


function RenderScreenGet(){
    let element = document.getElementById("conteudo-principal");

    const title = CreateElement("h3", "Buscar clientes");

    const descriptionButtomGetId = 
    CreateElement("p", "Buscar cliente por id")

    const buttomGetById = 
    CreateElement("button", [descriptionButtomGetId], "class", "conteudo-principal-get-clientes-button");
    buttomGetById.setAttribute("onclick", "RenderScreenGetCustumerById()")

    const descriptionButtomAllCustumer = 
    CreateElement("p", "Buscar todos os clientes")

    const butomAllCustumers = 
    CreateElement("button", [descriptionButtomAllCustumer], "class", "conteudo-principal-get-clientes-button");
    butomAllCustumers.setAttribute("onclick", "RenderScreenRusultGetAllCustumers()");

    const divMenu = 
    CreateElement("div", [buttomGetById, butomAllCustumers], "class", "conteudo-principal-get-clientes-menu");

    let divPrincipalGet = 
    CreateElement("div", [title, divMenu], "class", "conteudo-principal-get-clientes")

    let divPrincipal = 
    CreateElement("div", [divPrincipalGet], "id", "conteudo-principal");

    element.parentNode.replaceChild(divPrincipal, element);
}

function RenderScreenGetCustumerById(){
    let element = document.getElementById("conteudo-principal");

    const title = CreateElement("p", "Buscar cliente pelo id: ");

    const imput = CreateElement("input", "", "class", "conteudo-principal-get-clientes-by-id-input");
    imput.setAttribute("type", "text");

    const divSeacrh = CreateElement("div", [title, imput], "class", "conteudo-principal-get-clientes-by-id-seacrh")

    const descriptionButtom = 
    CreateElement("p", "Buscar")
    const butom = 
    CreateElement("button", [descriptionButtom], "class", "conteudo-principal-get-by-id-clientes-button");
    butom.setAttribute("onclick", "RenderScreenRusultGetById()");

    let divPrincipalGet = 
    CreateElement("div", [divSeacrh, butom], "class", "conteudo-principal-get-clientes-by-id")

    let divPrincipal = 
    CreateElement("div", [divPrincipalGet], "id", "conteudo-principal");

    element.parentNode.replaceChild(divPrincipal, element);
}

function RenderScreenRusultGetById(){
    let element = document.getElementById("conteudo-principal");
    let idCustumer = document.getElementsByClassName("conteudo-principal-get-clientes-by-id-input")[0].value;

    let divContend = CreateElement("div", "", "class", "conteudo-principal-get-clientes-by-id-result");

    if(idCustumer != null){
        custumers = GetCustumersById(idCustumer);

        let table = CreateElement("table", "");
        let columId = CreateElement("td", "");
        let columName = CreateElement("td", "");
        let columTelefone = CreateElement("td", "");
        let columCPF = CreateElement("td", "");

        let titleColumId = CreateElement("tr", "ID", "class", "title-table");
        let titleColumName = CreateElement("tr", "Nome", "class", "title-table");
        let titleColumTelefone = CreateElement("tr", "Telefone", "class", "title-table");
        let titleColumCPF = CreateElement("tr", "CPF", "class", "title-table");

        columId.appendChild(titleColumId);
        columName.appendChild(titleColumName);
        columTelefone.appendChild(titleColumTelefone);
        columCPF.appendChild(titleColumCPF);

        let ID = CreateElement("tr", custumers.ID.toString());
        let Nome = CreateElement("tr", custumers.Nome);
        let Telefone = CreateElement("tr", custumers.Telefone.toString());
        let CPF = CreateElement("tr", custumers.CPF.toString());

        columId.appendChild(ID);
        columName.appendChild(Nome);
        columTelefone.appendChild(Telefone);
        columCPF.appendChild(CPF);

        table.appendChild(columId);
        table.appendChild(columName);
        table.appendChild(columTelefone);
        table.appendChild(columCPF);

        divContend.appendChild(table);
    }
  

    let divPrincipalGet = 
    CreateElement("div", "", "class", "conteudo-principal-get-clientes-by-id");
    divPrincipalGet.appendChild(divContend);

    let divPrincipal = 
    CreateElement("div", [divPrincipalGet], "id", "conteudo-principal");

    element.parentNode.replaceChild(divPrincipal, element);
}



function GetCustumersById(idProduct){

    //fazer a requisicao
    clientes = {
        ID: 212121,
        Nome : "Tulio",
        Telefone : 99999999,
        CPF : 9999999999
    };

    return clientes;
}


function RenderScreenRusultGetAllCustumers(){
    let element = document.getElementById("conteudo-principal");

    let divContend = CreateElement("div", "", "class", "conteudo-principal-get-clientes-result");

    custumers = GetCustumers();

    let table = CreateElement("table", "");
        let columId = CreateElement("td", "");
        let columName = CreateElement("td", "");
        let columTelefone = CreateElement("td", "");
        let columCPF = CreateElement("td", "");

        let titleColumId = CreateElement("tr", "ID", "class", "title-table");
        let titleColumName = CreateElement("tr", "Nome", "class", "title-table");
        let titleColumTelefone = CreateElement("tr", "Telefone", "class", "title-table");
        let titleColumCPF = CreateElement("tr", "CPF", "class", "title-table");

        columId.appendChild(titleColumId);
        columName.appendChild(titleColumName);
        columTelefone.appendChild(titleColumTelefone);
        columCPF.appendChild(titleColumCPF);
    
    for (let index = 0; index < custumers.length; index++) {
        let ID = CreateElement("tr", custumers[index].ID.toString());
        let Nome = CreateElement("tr", custumers[index].Nome);
        let Telefone = CreateElement("tr", custumers[index].Telefone.toString());
        let CPF = CreateElement("tr", custumers[index].CPF.toString());
            
        columId.appendChild(ID);
        columName.appendChild(Nome);
        columTelefone.appendChild(Telefone);
        columCPF.appendChild(CPF);
    }
    


    table.appendChild(columId);
    table.appendChild(columName);
    table.appendChild(columTelefone);
    table.appendChild(columCPF);

    divContend.appendChild(table);    
  
    let divPrincipalGet = 
    CreateElement("div", "", "class", "conteudo-principal-get-clientes-by-id");
    divPrincipalGet.appendChild(divContend);

    let divPrincipal = 
    CreateElement("div", [divPrincipalGet], "id", "conteudo-principal");

    element.parentNode.replaceChild(divPrincipal, element);

}



function GetCustumers(){

    //fazer a requisicao
    clientes = [
        {
            ID: 212121,
            Nome : "Tulio",
            Telefone : 99999999,
            CPF : 9999999999
        },
        {
            ID: 212121,
            Nome:"Teste",
            Telefone: 99999999,
            CPF: 9999999999
        }
    ];

    return clientes;
}



function CreateElement(type, contend, classOurId, classOurIdName){
    let isString = typeof contend === 'string';

    let element = document.createElement(type);

    if(!isString) {  
        
        for (let index = 0; index < contend.length; index++) {
            var i = contend[index];
            element.appendChild(i);            
        }
        
    }else{
        element.appendChild(document.createTextNode(contend));
    }
    

    if(classOurId != null && classOurIdName != null){
        if(classOurId.toUpperCase() == "ID"){
            element.setAttribute("id",classOurIdName);
        }else if(classOurId.toUpperCase() == "CLASS"){
            element.classList.add(classOurIdName);
        }
    }

    return element;
}