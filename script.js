const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de comprar um novo smartphone com inteligência artificial para facilitar suas tarefas diárias. O que faz?",
        alternativas: [
            {
                texto: "Testo todos os recursos imediatamente para ver como a IA pode me ajudar.",
                afirmacao: "Está empolgado com a inovação e quer explorar todas as funcionalidades da tecnologia."
            },
            {
                texto: "Prefiro continuar com meu smartphone antigo, pois já estou acostumado.",
                afirmacao: "Valoriza a simplicidade e resiste a mudanças em relação ao que já é confortável."
            }
        ]
    },
    {
        enunciado: "Você vê uma propaganda de um aplicativo que promete aumentar sua produtividade usando IA. Você...",
        alternativas: [
            {
                texto: "Baixo o aplicativo e começo a testar, querendo ver como ele pode melhorar meu trabalho.",
                afirmacao: "Está sempre em busca de novas ferramentas tecnológicas para otimizar seu tempo."
            },
            {
                texto: "Ignoro o anúncio, pois acredito que já tenho tudo o que preciso para ser produtivo.",
                afirmacao: "Prefere métodos tradicionais e não sente necessidade de depender de mais aplicativos."
            }
        ]
    },
    {
        enunciado: "Você está comprando online e a loja sugere produtos baseados no seu histórico de compras. O que você faz?",
        alternativas: [
            {
                texto: "Fico feliz com a sugestão e compro os produtos que a IA sugeriu.",
                afirmacao: "Aceita a ajuda da tecnologia para facilitar suas compras e otimizar suas escolhas."
            },
            {
                texto: "Desconfio das recomendações e prefiro procurar os produtos manualmente.",
                afirmacao: "Fica desconfiado da influência de algoritmos nas suas decisões de compra."
            }
        ]
    },
    {
        enunciado: "Você recebe uma mensagem de um amigo dizendo que usou um assistente virtual para organizar uma festa surpresa. O que você pensa?",
        alternativas: [
            {
                texto: "Fico surpreso com a criatividade e quero usar um assistente virtual para organizar minha próxima festa.",
                afirmacao: "Está entusiasmado com a ideia de usar tecnologia para planejar eventos de forma mais eficiente."
            },
            {
                texto: "Prefiro planejar minha festa de maneira mais pessoal e não confio em assistentes virtuais.",
                afirmacao: "Valoriza o toque humano no planejamento e organização de eventos."
            }
        ]
    }
];
