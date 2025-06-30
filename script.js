const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Até que ponto os direitos humanos podem ser limitados em nome da segurança pública ou da ordem social?

?",
        alternativas: [
            {
                texto: "Os direitos humanos podem ser totalmente suspensos para garantir a paz e a ordem.",
                afirmacao: " Os direitos humanos podem ser limitados de forma proporcional e temporária, respeitando a dignidade humana e com controle judicial."
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

