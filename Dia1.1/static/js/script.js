let valor = document.getElementById("valor")
const valorMaximo = 4

function AddNumberOfMembers() {
    let valorAtual = Number(valor.textContent);

    console.log(valorAtual)

    if (valorAtual == valorMaximo) {
        alert("Você chegou ao valor máximo dos integrantes!")
    }
    else {
        valor.textContent = valorAtual + 1;
    }
    
}

