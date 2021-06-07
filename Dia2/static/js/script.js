
function Login() {
    let nome = document.getElementById("user").value
    let password = document.getElementById("password").value
    let retryPassword = document.getElementById("retryPassword").value
    console.log(nome, password, retryPassword)

    if (password == retryPassword) {
        alert("Concluido. Você está logado agora!")
    }
    else {
        alert("As senhas não coincidem")
    }
    

}