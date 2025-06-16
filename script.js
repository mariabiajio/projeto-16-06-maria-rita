const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você encontra um robô no seu bairro que responde perguntas sobre reciclagem. O que faz?",
        alternativas: [
            {
                texto: "Começa a perguntar tudo sobre lixo e meio ambiente.",
                afirmacao: "Mostrou grande interesse em aprender com a tecnologia para melhorar o planeta."
            },
            {
                texto: "Acha estranho e prefere não interagir.",
                afirmacao: "Ficou receoso, mas ainda assim curioso sobre como essas tecnologias funcionam."
            }
        ]
    },
    {
        enunciado: "Na escola, a professora propõe usar um aplicativo de IA para criar uma história. O que você faz?",
        alternativas: [
            {
                texto: "Topa na hora e quer testar todos os recursos.",
                afirmacao: "Descobriu uma nova forma criativa de usar a tecnologia."
            },
            {
                texto: "Prefere escrever a história à mão, como sempre fez.",
                afirmacao: "Valoriza o próprio processo criativo sem depender da tecnologia."
            }
        ]
    },
    {
        enunciado: "Você e seus amigos estão debatendo sobre robôs na sociedade. Qual sua opinião?",
        alternativas: [
            {
                texto: "Acredita que robôs devem ajudar, mas não substituir humanos.",
                afirmacao: "Tem uma visão equilibrada sobre o papel da IA."
            },
            {
                texto: "Acha que quanto mais robôs melhor, tudo deveria ser automatizado.",
                afirmacao: "É entusiasta da tecnologia e sonha com um mundo automatizado."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
