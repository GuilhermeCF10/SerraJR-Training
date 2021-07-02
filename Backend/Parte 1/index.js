import express, { json, request, response } from 'express';

const app = express()

app.use(json())

app.get("/get", (request, response, next) => {
    response.send("Gloria ao Sol")
})

app.post("/post", (request, response, next) => {
    let valor1 = Number(request.body.valor1)
    let valor2 = Number(request.body.valor2)
    let valor3 = Number(request.body.valor3)
    let delta = (valor2 * valor2) - 4 * (valor1) * (valor3)
    let raiz1 = (- (valor2) + Math.sqrt(delta) ) / 2 * (valor1)
    let raiz2 = (- (valor2) - Math.sqrt(delta) ) / 2 * (valor1)
    if (!raiz1 || !raiz2) {
        response.send("As raizes não são pertencentes aos reais")
    } else {
        response.send(`Os valores das raizes são: ${String(raiz1)} e ${String(raiz2)}`)
    }
})

app.delete("/delete/:l1/:l2/:l3", (request, response) => {
    let lado1 = Number(request.params.l1);
    let lado2 = Number(request.params.l2);
    let lado3 = Number(request.params.l3);
    
    if (lado1 == lado2 && lado2 == lado3) {
        response.send("Triângulo Equilátero")
    } else if ( (lado1 > (lado2+lado3)) || (lado2 > (lado1+lado3)) || (lado3 > (lado2+lado1)) ) {
        response.send("Não pode ser um triângulo.")
    } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
        response.send("Triângulo Escaleno")
    }  else {
        response.send("Triângulo Isósceles")
    }
})

app.listen(3003, () => {
    console.log("backend sendo executado na porta 3003")
})