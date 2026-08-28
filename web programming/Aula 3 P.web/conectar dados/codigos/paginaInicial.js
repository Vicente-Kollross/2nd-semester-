console.log("Pagina Inicial rodando!")


let dados = [
    {
        id_aplicativo: "1",
        nome: "Instagram",
        descrição: "Rede social de compartilhamento de fotos e vídeos.",
        imagem: "https://cdn-icons-png.flaticon.com/512/733/733558.png"
    },

    {
        id_aplicativo: "2",
        nome: "Facebook",
        descrição: "Rede social para conectar amigos e compartilhar conteúdo.",
        imagem: "https://cdn-icons-png.flaticon.com/512/733/733547.png"
    },

    {
        id_aplicativo: "3",
        nome: "Twitter",
        descrição: "Rede social de microblogging para compartilhar pensamentos e atualizações.",
        imagem: "https://cdn-icons-png.flaticon.com/512/733/733579.png"
    },

    {
        id_aplicativo: "4",
        nome: "WhatsApp",
        descrição: "Aplicativo de mensagens instantâneas para comunicação em tempo real.",
        imagem: "https://cdn-icons-png.flaticon.com/512/733/733585.png"
    },

    {
        id_aplicativo: "5",
        nome: "TikTok",
        descrição: "Plataforma de vídeos curtos com conteúdo criativo e viral.",
        imagem: "https://cdn-icons-png.flaticon.com/512/3128/3128304.png"
    },

    {
        id_aplicativo: "6",
        nome: "YouTube",
        descrição: "Plataforma de compartilhamento de vídeos de qualidade alta.",
        imagem: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
    },

    {
        id_aplicativo: "7",
        nome: "Telegram",
        descrição: "Aplicativo de mensagens seguro com criptografia de ponta a ponta.",
        imagem: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
    },

    {
        id_aplicativo: "8",
        nome: "Snapchat",
        descrição: "Aplicativo de mensagens efêmeras com filtros e efeitos especiais.",
        imagem: "https://cdn-icons-png.flaticon.com/512/2111/2111644.png"
    },

    {
        id_aplicativo: "9",
        nome: "LinkedIn",
        descrição: "Rede profissional para conectar com colegas e oportunidades de carreira.",
        imagem: "https://cdn-icons-png.flaticon.com/512/145/145807.png"
    },

    {
        id_aplicativo: "10",
        nome: "Discord",
        descrição: "Plataforma de comunicação para comunidades e gamers.",
        imagem: "https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
    },

    {
        id_aplicativo: "11",
        nome: "Pinterest",
        descrição: "Rede social de descoberta e compartilhamento de imagens e ideias.",
        imagem: "https://cdn-icons-png.flaticon.com/512/145/145807.png"
    },

    {
        id_aplicativo: "12",
        nome: "Reddit",
        descrição: "Comunidade online para compartilhar e discutir conteúdo variado.",
        imagem: "https://cdn-icons-png.flaticon.com/512/2111/2111589.png"
    }
    
]


let respostaMap = dados.map(app => `
        <tr>
            <td>
                <div class="card">
                    <img src="${app.imagem}" alt="${app.nome}">
                    <h2>${app.nome}</h2>
                    <p>${app.descrição}</p>
                </div>
            </td>
        </tr>
    `).join("")

    console.log(respostaMap)

const tabelaCorpo = document.getElementById("tabela-corpo")
tabelaCorpo.innerHTML = respostaMap