document.getElementById("resultadoSoma").value = "";
document.getElementById("resultadoSubtracao").value = "";
document.getElementById("resultadoMultiplicacao").value = "";
document.getElementById("resultadoDivisao").value = "";


/****************              Soma             ****************/
let soma = document.getElementById("soma2")
let okSoma = 0

// Caso ela ficar a primeira vez em foco
soma.addEventListener('focus', function() {
    okSoma = 1;
});

// Caso o foco for retirado
soma.addEventListener('blur', function() {
    let n1 = document.getElementById("soma1").value
    let n2 = document.getElementById("soma2").value
    let resultado = document.getElementById("resultadoSoma")

    if (okSoma == 1) {
        resultado.value = Number(n1) + Number(n2)
    }
});

////////////////////////////////////////////////////////////////////////


/****************              Subtração              ****************/
let subtracao = document.getElementById("subtracao2")
let okSubtracao = 0

// Caso ela ficar a primeira vez em foco
subtracao.addEventListener('focus', function() {
    okSubtracao = 1;
});

// Caso o foco for retirado
subtracao.addEventListener('blur', function() {
    let n1 = document.getElementById("subtracao1").value
    let n2 = document.getElementById("subtracao2").value
    let resultado = document.getElementById("resultadoSubtracao")

    if (okSubtracao == 1) {
        resultado.value = Number(n1) - Number(n2)
    }
});

////////////////////////////////////////////////////////////////////////


/****************              Multiplicação               ****************/
let multiplicacao = document.getElementById("multiplicacao2")
let okMultiplicacao = 0

// Caso ela ficar a primeira vez em foco
multiplicacao.addEventListener('focus', function() {
    okMultiplicacao = 1;
});

// Caso o foco for retirado
multiplicacao.addEventListener('blur', function() {
    let n1 = document.getElementById("multiplicacao1").value
    let n2 = document.getElementById("multiplicacao2").value
    let resultado = document.getElementById("resultadoMultiplicacao")

    if (okMultiplicacao == 1) {
        resultado.value = Number(n1) * Number(n2)
    }
});

////////////////////////////////////////////////////////////////////////




/****************              Divisão               ****************/
let divisao = document.getElementById("divisao2")
let okDivisao = 0

// Caso ela ficar a primeira vez em foco
divisao.addEventListener('focus', function() {
    okDivisao = 1;
});

// Caso o foco for retirado
divisao.addEventListener('blur', function() {
    let n1 = document.getElementById("divisao1").value
    let n2 = document.getElementById("divisao2").value
    let resultado = document.getElementById("resultadoDivisao")

    if (okDivisao == 1) {
        resultado.value = Number(n1) / Number(n2)
    }
});

////////////////////////////////////////////////////////////////////////
