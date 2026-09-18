console.log("js rodou")


let dados = [
    {
        id_aplicativo: "1",
        nome: "A odisseia",
        genero: "Ação Medieval Historia",
        ano: "2026"
    },
    {
        id_aplicativo: "1",
        nome: "A odisseia",
        genero: "Ação Medieval Historia",
        ano: "2026"
    },
    {
        id_aplicativo: "1",
        nome: "A odisseia",
        genero: "Ação Medieval Historia",
        ano: "2026"
    },
    {
        id_aplicativo: "1",
        nome: "A odisseia",
        genero: "Ação Medieval Historia",
        ano: "2026"
    },
    {
        id_aplicativo: "1",
        nome: "A odisseia",
        genero: "Ação Medieval Historia",
        ano: "2026"
    }
]


let respostaMap = dados.map(filme => `
        <tr>
            <td>${filme.nome}</td>
            <td>${filme.genero}</td>
            <td>${filme.ano}</td>
        </tr>
    `).join("")

    console.log(respostaMap)

const tabelaCorpo = document.getElementById("tabela-corpo")
tabelaCorpo.innerHTML = respostaMap
console.log("resposta map")