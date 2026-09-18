console.log("javascriptrodando")

const emailcred = "vicente.kollross@pucpr.edu.br"
const senhacred = "senhadificil123"

const inptsenha = document.getElementById("inptsenha")
const inptemail = document.getElementById("inptemail")
const btnentrar = document.getElementById("btnentrar")


btnentrar.onclick = () => {
    console.log("btnentrar")
    validate(inptemail.value,inptsenha.value)
}

function validate(email, senha){
    if(emailcred == email && senhacred == senha){
        console.log("login deu certo")
        window.location.href ="./paginas/listagem.html"
    }
    else{
        alert("campos preenchidos incorretamente");
    }
}  