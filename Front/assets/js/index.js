function RenderHome(){
    let element = document.getElementById("main-contend");

    const text = CreateElement("p", "Gerencie seus clientes com o Customer Management");

    const img = document.createElement("img");
    img.classList.add("image-home");
    img.setAttribute("src", "../imgs/managerHomePage.jpeg");
    img.setAttribute("alt", "Gerenciando seus clientes");

    const divHomeMain = CreateElement("div", [img, text], "class", "main-home-content");

    let divMain = 
    CreateElement("div", [divHomeMain], "id", "main-contend");

    element.parentNode.replaceChild(divMain, element);
}


function RenderScreenGet(){
    let element = document.getElementById("main-contend");

    const title = CreateElement("h3", "Buscar clientes");

    const descriptionButtomGetId = 
    CreateElement("p", "Buscar cliente por id")

    const buttomGetById = 
    CreateElement("button", [descriptionButtomGetId], "class", "content-main-button");
    buttomGetById.setAttribute("onclick", "RenderScreenGetCustumerById()")

    const descriptionButtomAllCustumer = 
    CreateElement("p", "Buscar todos os clientes")

    const butomAllCustumers = 
    CreateElement("button", [descriptionButtomAllCustumer], "class", "content-main-button");
    butomAllCustumers.setAttribute("onclick", "RenderScreenRusultGetAllCustumers()");

    const divMenu = 
    CreateElement("div", [buttomGetById, butomAllCustumers], "class", "content-main-menu");

    let divMainGet = 
    CreateElement("div", [title, divMenu], "class", "main-contend")

    let divMain = 
    CreateElement("div", [divMainGet], "id", "main-contend");

    element.parentNode.replaceChild(divMain, element);
}

function RenderScreenGetCustumerById(){
    let element = document.getElementById("main-contend");

    const title = CreateElement("p", "Buscar cliente pelo id: ");

    const imput = CreateElement("input", "", "id", "main-contend-id-input");
    imput.setAttribute("type", "text");

    const divSeacrh = CreateElement("div", [title, imput], "class", "content-main-menu")

    const descriptionButtom = 
    CreateElement("p", "Buscar")
    const butom = 
    CreateElement("button", [descriptionButtom], "class", "content-main-button");
    butom.setAttribute("onclick", "RenderScreenRusultGetById()");

    let divMainGet = 
    CreateElement("div", [divSeacrh, butom], "class", "main-contend")

    let divMain = 
    CreateElement("div", [divMainGet], "id", "main-contend");

    element.parentNode.replaceChild(divMain, element);
}

function RenderScreenRusultGetById(){
    let element = document.getElementById("main-contend");
    let idCustumer = document.getElementById("main-contend-id-input").value;

    let divContend = CreateElement("div", "");

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
  

    let divMainGet = 
    CreateElement("div", "", "class", "main-contend");
    divMainGet.appendChild(divContend);

    let divMain = 
    CreateElement("div", [divMainGet], "id", "main-contend");

    element.parentNode.replaceChild(divMain, element);
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
    let element = document.getElementById("main-contend");

    let divContend = CreateElement("div", "");

    custumers = GetAllCustumers();

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
  
    let divMainGet = 
    CreateElement("div", "", "class", "main-contend");
    divMainGet.appendChild(divContend);

    let divMain = 
    CreateElement("div", [divMainGet], "id", "main-contend");

    element.parentNode.replaceChild(divMain, element);

}



function GetAllCustumers(){

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



function RenderScreenPost(){
    let element = document.getElementById("main-contend");
    
    const title = CreateElement("p", "Inserir um novo cliente:");

    let table = CreateElement("table", "");

    let columCampos = CreateElement("td", "");
    let columImput = CreateElement("td", "");
  
    const titleNome = CreateElement("p", "Nome:  ");
    const titleTelefone = CreateElement("p", "Telefone:  ");
    const titleCPF = CreateElement("p", "CPF:  ");

    const imputName = CreateElement("input", "", "class", "main-contend-imput-Nome");
    imputName.setAttribute("type", "text");   
   
    const imputTelefone = CreateElement("input", "", "class", "main-contend-imput-Telefone");
    imputTelefone.setAttribute("type", "text");

    const imputCPF = CreateElement("input", "", "class", "main-contend-imput-CPF");
    imputCPF.setAttribute("type", "text");

    columCampos.appendChild(CreateElement("tr", [titleNome]));
    columCampos.appendChild(CreateElement("tr", [titleTelefone]));
    columCampos.appendChild(CreateElement("tr", [titleCPF]));

    columImput.appendChild(CreateElement("tr", [imputName]));
    columImput.appendChild(CreateElement("tr", [imputTelefone]));
    columImput.appendChild(CreateElement("tr", [imputCPF]));

    table.appendChild(columCampos);
    table.appendChild(columImput);

    const descriptionButtom = 
    CreateElement("p", "Inserir")
    const butom = 
    CreateElement("button", [descriptionButtom], "class", "content-main-button");
    butom.setAttribute("onclick", "RenderResultPost()");

    let divMainPost = 
    CreateElement("div", [title,table, butom],
     "class", "main-contend")

    let divMain= 
    CreateElement("div", [divMainPost], "id", "main-contend");

    element.parentNode.replaceChild(divMain, element);
}


function RenderResultPost(){

    let element = document.getElementById("main-contend");
    let divContend = CreateElement("div", "");

    const nome = document.getElementsByClassName("main-contend-imput-Nome")[0].value;
    const telefone = document.getElementsByClassName("main-contend-imput-Telefone")[0].value;
    const CPF = document.getElementsByClassName("main-contend-imput-CPF")[0].value;

    const postCustumer = PostCustumer(nome, telefone, CPF);

    postCustumer === true? divContend.appendChild(CreateElement("h1", "Cliente inserido com sucesso!")): 
    divContend.appendChild(CreateElement("h1", "Cliente nao inserido, verifique os dados e tente novamente."))
    

    let divMainPost = 
    CreateElement("div", "", "class", "main-contend");
    divMainPost.appendChild(divContend);

    let divMain = 
    CreateElement("div", [divMainPost], "id", "main-contend");

    element.parentNode.replaceChild(divMain, element);
}

function PostCustumer(Nome, Telefone, CPF){
    return true;
}


function RenderScreenPut(){
    let element = document.getElementById("main-contend");
    
    const title = CreateElement("p", "Atualizar cliente:");

    let table = CreateElement("table", "");

    let columCampos = CreateElement("td", "");
    let columImput = CreateElement("td", "");
  
    const titleNome = CreateElement("p", "Nome:  ");
    const titleTelefone = CreateElement("p", "Telefone:  ");
    const titleCPF = CreateElement("p", "CPF:  ");

    const imputName = CreateElement("input", "", "class", "main-contend-imput-Nome");
    imputName.setAttribute("type", "text");   
   
    const imputTelefone = CreateElement("input", "", "class", "main-contend-imput-Telefone");
    imputTelefone.setAttribute("type", "text");

    const imputCPF = CreateElement("input", "", "class", "main-contend-imput-CPF");
    imputCPF.setAttribute("type", "text");

    columCampos.appendChild(CreateElement("tr", [titleNome]));
    columCampos.appendChild(CreateElement("tr", [titleTelefone]));
    columCampos.appendChild(CreateElement("tr", [titleCPF]));

    columImput.appendChild(CreateElement("tr", [imputName]));
    columImput.appendChild(CreateElement("tr", [imputTelefone]));
    columImput.appendChild(CreateElement("tr", [imputCPF]));

    table.appendChild(columCampos);
    table.appendChild(columImput);

    const descriptionButtom = 
    CreateElement("p", "Atualizar")
    const butom = 
    CreateElement("button", [descriptionButtom], "class", "content-main-button");
    butom.setAttribute("onclick", "RenderResultPut()");

    let divMainPut = 
    CreateElement("div", [title,table, butom],
     "class", "main-contend")

    let divMain = 
    CreateElement("div", [divMainPut], "id", "main-contend");

    element.parentNode.replaceChild(divMain, element);
}


function RenderResultPut(){

    let element = document.getElementById("main-contend");
    let divContend = CreateElement("div", "", "class", "main-contend-put-result");

    const nome = document.getElementsByClassName("main-contend-imput-Nome")[0].value;
    const telefone = document.getElementsByClassName("main-contend-imput-Telefone")[0].value;
    const CPF = document.getElementsByClassName("main-contend-imput-CPF")[0].value;

    const putCustumer = PutCustumer(nome, telefone, CPF);

    putCustumer === true? divContend.appendChild(CreateElement("h1", "Cliente atualizado com sucesso!")): 
    divContend.appendChild(CreateElement("h1", "Cliente nao atualizado, verifique os dados e tente novamente."))
    

    let divMainPut = 
    CreateElement("div", "", "class", "main-contend");
    divMainPut.appendChild(divContend);

    let divMain = 
    CreateElement("div", [divMainPut], "id", "main-contend");

    element.parentNode.replaceChild(divMain, element);
}

function PutCustumer(Nome, Telefone, CPF){
    return true;
}

function RenderScreenDelete(){
    let element = document.getElementById("main-contend");
    
    const title = CreateElement("p", "Excluir um cliente:");

    const imputId = CreateElement("input", "", "class", "main-contend-id-input");
    imputId.setAttribute("type", "text");

    const divImput = CreateElement("div", [title, imputId], "class", "content-main-menu")

    const descriptionButtom = 
    CreateElement("p", "Excluir")

    const butom = 
    CreateElement("button", [descriptionButtom], "class", "content-main-button");
    butom.setAttribute("onclick", "RenderResultDelete()");

    let divMainDelete = 
    CreateElement("div", [divImput, butom],
     "class", "main-contend")

    let divMain = 
    CreateElement("div", [divMainDelete], "id", "main-contend");

    element.parentNode.replaceChild(divMain, element);
}


function RenderResultDelete(){

    let element = document.getElementById("main-contend");
    let divContend = CreateElement("div", "");

    const idCustumer = document.getElementsByClassName("main-contend-id-input")[0].value;

    const deleteCustumer = DeleteCustumer(idCustumer);

    deleteCustumer === true? divContend.appendChild(CreateElement("h1", "Cliente deletado com sucesso!")): 
    divContend.appendChild(CreateElement("h1", "Cliente nao deletado, verifique os dados e tente novamente."))
    

    let divMainDelete = 
    CreateElement("div", "", "class", "main-contend");
    divMainDelete.appendChild(divContend);

    let divMain = 
    CreateElement("div", [divMainDelete], "id", "main-contend");

    element.parentNode.replaceChild(divMain, element);
}

function DeleteCustumer(idCustumer){
    return true;
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