console.log("Pagina Inicial rodando!")


let dados = [
    {
        id_aplicativo: "1",
        nome: "Instagram",
        descrição: "Rede social de compartilhamento de fotos e vídeos.",
        imagem: "insta.avif"
    },

    {
        id_aplicativo: "2",
        nome: "Facebook",
        descrição: "Rede social para conectar amigos e compartilhar conteúdo.",
        imagem: "face.png"
    },

    {
        id_aplicativo: "3",
        nome: "Twitter",
        descrição: "Rede social de microblogging para compartilhar pensamentos e atualizações.",
        imagem: "twitter.avif"
    },

    {
        id_aplicativo: "4",
        nome: "WhatsApp",
        descrição: "Aplicativo de mensagens instantâneas para comunicação em tempo real.",
        imagem: "whats.jpg"
    }
    
]


let respostaMap = dados.map(app => `
        <tr>
            <td>
                <div class="card">
                    <img src="./../imagens/${app.imagem}" alt="${app.nome}">
                    <h2>${app.nome}</h2>
                    <p>${app.descrição}</p>
                </div>
            </td>
        </tr>
    `).join("")

    console.log(respostaMap)

const tabelaCorpo = document.getElementById("tabela-corpo")
tabelaCorpo.innerHTML = respostaMap