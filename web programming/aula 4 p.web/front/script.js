console.log("js rodando")

const tabelacorpo = document.getElementById("tabelacorpo")
let dados = []

function getData() {
    console.log("getData rodando")
    fetch('http://localhost:8000')
        .then(response => response.json())
        .then(data => populate(data))
        .catch(error => console.error('Erro ao buscar dados:', error))
}

function populate(data) {
    console.log(data)

    const respostaFetch = data.map(item => `
        <tr>
            <td>${item.nome}</td>
            <td>${item.email}</td>
        </tr>
    `).join('')

    console.log(respostaFetch)
    tabelacorpo.innerHTML = respostaFetch
}

getData()
