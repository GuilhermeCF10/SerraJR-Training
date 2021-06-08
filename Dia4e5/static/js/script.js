let itensLista = [];

function AddTarefa() {
    // Pega a lista de tarefas (ul)
    let listaTarefas = document.getElementById("tarefasList")
    
    // Pega o input do usuário (input)
    let inputTarefa = document.getElementById("addNewTarefa").value;
    

    if (inputTarefa == "") {
        console.log("Não foi adicionado nada pela caixa estar vazia.")
    }
    else {
        /*// Cria uma nova Li
        let novoItem = document.createElement("li")
        
        // Cria um textNode para atribuir na Li
        let textoItem = document.createTextNode("Tarefa: " + inputTarefa)
        
        // Atribue o textoItem ao Li
        novoItem.appendChild(textoItem)

        // Coloca o Li no html
        listaTarefas.appendChild(novoItem)*/

        // Cria uma nova LI
        let novaLi= document.createElement("li")

        // Cria um h5
        let novoH5 = document.createElement("h5")

        // Cria uma nova span
        let novoSpan = document.createElement("span")

        // Cria um textNode para atribuir no h5
        let tarefaItem = document.createTextNode("Tarefa: ")

        // Cria um textNode para atribuir na span
        let textoItem = document.createTextNode(inputTarefa)
        
        // Atribue o textoItem ao h5
        novoH5.appendChild(tarefaItem)

        // Atribue o textoItem ao span
        novoSpan.appendChild(textoItem)

        // Atribue o h5 e span no LI
        novaLi.appendChild(novoH5)
        novaLi.appendChild(novoSpan)
        
        // Coloca o Li no html
        listaTarefas.appendChild(novaLi)
    }
}


/*
    // Cria uma nova Li
        let novoLi = document.createElement("li")
        
         // Cria um h5
        let novoH5 = document.createElement("h5")

        // Cria uma nova span
        let novaSpan = document.createElement("span")


        // Cria um textNode para atribuir na h5
        let tarefaH5 = document.createTextNode("Tarefa: ")

        // Cria um textNode para atribuir na span
        let textoItem = document.createTextNode(inputTarefa)
        
        
        // Atribue a tarefaH5 no h5
        tarefaH5.appendChild(novoH5)

        // Atribue o input no novaSpan
        textoItem.appendChild(novaSpan)


        // Atribue o h5 e span no Li
        novoLi.appendChild(novoH5)
        novoLi.appendChild(novaSpan)


        // Coloca o Li no html (ul)
        listaTarefas.appendChild(novoLi)
    */