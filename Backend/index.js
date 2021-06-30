import express, { json, request, response } from 'express';

const app = express()

app.use(json())

app.get("/get", (request, response, next) => {
    response.send("Hello world")
})

app.post("/post", (request, response, next) => {
    let newvalor = request.body.value
    console.log(newvalor)
    response.send(String(newvalor))
})

app.delete("/delete/:id", (request, response) => {
    let id = request.params.id
    response.send(id)
})

app.listen(3003, () => {
    console.log("backend sendo executado na porta 3003")
})