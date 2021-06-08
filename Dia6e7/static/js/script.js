let itensLista = [];
// Pega a lista de tarefas (ul)
let listaTarefas = document.getElementById("tarefasList")
let i = 0;

function AddTarefa() {
    
    console.log(listaTarefas)
    // Pega o input do usuário (input)
    let inputNome = document.getElementById("nomeReceita").value;
    let inputTempo = document.getElementById("tempoReceita").value;
    let inputCategoria = document.getElementById("categoriaReceita").value;


    if ((inputNome == "") || (inputTempo == "") || (inputCategoria == "")) {
        alert("Não foi adicionado a receita, pelo motivo de uma das caixas se encontrarem vazia.")
    }
    else {

        if (itensLista.length > 1) {

            listaTarefas.style.overflowX = "scroll"

        }

        // Cria uma nova Li
        let novaLi= document.createElement("li")
       
        // Cria uma div 
        let item = document.createElement("div")
        // Adiciona a classe a div (li .item)
        item.className = "item"

        // Cria uma div
        let itemBase = document.createElement("div")
        // Adiciona a classe a div (li .item .itemBase)
        itemBase.className = "itemBase"

        // Cria uma div
        let baseTitulo = document.createElement("div")
        // Adiciona a classe a div (li .item .itemBase .baseTitulo)
        baseTitulo.className = "baseTitulo"

        // Cria uma span (li .item .itemBase .baseTitulo span )
        let baseTituloSpan = document.createElement("span")
        // Texto do Span
        let baseTituloSpanTexto = document.createTextNode(inputNome)
        

        baseTituloSpan.appendChild(baseTituloSpanTexto)
        baseTitulo.appendChild(baseTituloSpan)
        itemBase.appendChild(baseTitulo)
        
        
        // Cria uma div
        let baseLixeira = document.createElement("div")
        // Adiciona a classe a div (li .item .itemBase .baseLixeira )
        baseLixeira.className = "baseLixeira"

        //  li .item .itemBase .baseLixeira button 
        let baseLixeiraButton = document.createElement("button")
        baseLixeiraButton.setAttribute("onClick", `RemoverTarefa(${i})`)
        baseLixeiraButton.setAttribute("value", i);
        i = i + 1;


        //  li .item .itemBase .baseLixeira button img 
        let baseLixeiraButtonImg = document.createElement("img")
        baseLixeiraButtonImg.src = "../static/img/trash.png"
        baseLixeiraButtonImg.style.width = "32px"
        baseLixeiraButtonImg.style.height = "43px"

        baseLixeiraButton.appendChild(baseLixeiraButtonImg)
        baseLixeira.appendChild(baseLixeiraButton)
        itemBase.appendChild(baseLixeira)
        
        item.appendChild(itemBase)

        // Cria a div
        let itemInfo = document.createElement("div");
        itemInfo.className = "itemInfo"

        // Cria a div
        let infoTempo = document.createElement("div");
        infoTempo.className = "infoTempo"

        // Cria o span
        let infoTempoSpan = document.createElement("span");
        let infoTempoSpanTexto = document.createTextNode(inputTempo)

        infoTempoSpan.appendChild(infoTempoSpanTexto)
        infoTempo.appendChild(infoTempoSpan)

        itemInfo.appendChild(infoTempo)
        item.appendChild(itemInfo)

        // Cria a div
        let infoCategoria = document.createElement("div");
        infoCategoria.className = "infoCategoria"

        // Cria o span
        let infoCategoriaSpan = document.createElement("span");
        let infoCategoriaSpanTexto = document.createTextNode(inputCategoria)

        infoCategoriaSpan.appendChild(infoCategoriaSpanTexto)
        infoCategoria.appendChild(infoCategoriaSpan)

        itemInfo.appendChild(infoCategoria)
        item.appendChild(itemInfo)

        novaLi.appendChild(item)
        listaTarefas.appendChild(novaLi)
        itensLista.push(novaLi)

    }
}
   
function RemoverTarefa(pos) {
    listaTarefas.removeChild(itensLista[pos])
    //console.log(itensLista)
    //
    //console.log(itensLista)
    
    console.log(itensLista)
    console.log(listaTarefas)
    
}
