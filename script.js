const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Você encontra um robô no seu bairro que é capaz de organizar o lixo reciclável automaticamente. O que você faz?",
        alternativas: [
            {
                texto: "Fico maravilhado e quero aprender como ele funciona.",
                afirmacao: "Mostrou grande interesse em novas soluções tecnológicas para o meio ambiente."
            },
            {
                texto: "Acho estranho e prefiro continuar separando o lixo manualmente.",
                afirmacao: "Tem receio de depender de máquinas para uma tarefa importante."
            }
        ]
    },
    {
        enunciado: "Na escola, o professor propõe usar um chatbot de IA para ajudar com o conteúdo de história. O que você faz?",
        alternativas: [
            {
                texto: "Aceito de imediato e quero ver o que ele pode ensinar.",
                afirmacao: "Está aberto a novas formas de aprendizagem e tecnologia."
            },
            {
                texto: "Prefiro estudar sozinho, com os livros que tenho.",
                afirmacao: "Valoriza o estudo tradicional e prefere aprender à sua própria maneira."
            }
        ]
    },
    {
        enunciado: "Você e seus amigos estão debatendo sobre o impacto de robôs na economia. Qual sua opinião?",
        alternativas: [
            {
                texto: "Acredito que os robôs devem ajudar na produtividade, mas não substituir os trabalhadores.",
                afirmacao: "Tem uma visão crítica e equilibrada sobre os impactos da automação."
            },
            {
                texto: "Acho que os robôs devem substituir o máximo possível de trabalho humano, para aumentar a eficiência.",
                afirmacao: "É a favor da automação e acredita que ela pode melhorar os processos econômicos."
            }
        ]
    },
    {
        enunciado: "Como você se sentiria ao interagir com um robô que pudesse criar obras de arte? ",
        alternativas: [
            {
                texto: "Ficaria empolgado em ver como a IA pode inovar na arte.",
                afirmacao: "Vê a IA como uma ferramenta criativa capaz de expandir os limites artísticos."
            },
            {
                texto: "Ficaria desconfiado, pois acredito que a arte deve ser feita por humanos.",
                afirmacao: "Defende a arte como uma expressão exclusivamente humana."
            }
        ]
    }
];
