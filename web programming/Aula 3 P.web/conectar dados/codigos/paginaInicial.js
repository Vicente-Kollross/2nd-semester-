console.log("Pagina Inicial rodando!")


let dados = [
    {
        id_aplicativo: "1",
        nome: "Instagram",
        descrição: "Rede social de compartilhamento de fotos e vídeos.",
    },

    {
        id_aplicativo: "2",
        nome: "Facebook",
        descrição: "Rede social para conectar amigos e compartilhar conteúdo.",
    },

    {
        id_aplicativo: "3",
        nome: "Twitter",
        descrição: "Rede social de microblogging para compartilhar pensamentos e atualizações.",
    },

    {
        id_aplicativo: "4",
        nome: "WhatsApp",
        descrição: "Aplicativo de mensagens instantâneas para comunicação em tempo real.",
    }
    
]


let respostaMap = dados.map(app => `
        <tr>
            <td>${app.id_aplicativo}</td>
            <td>${app.nome}</td>
            <td>${app.descrição}</td>
        </tr>
    `).join("")

    console.log(respostaMap)

const tabelaCorpo = document.getElementById("tabela-corpo")
tabelaCorpo.innerHTML = respostaMap