const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Coca ou Suco?",
        alternativas: [
            {
                texto: "Coca.",
                afirmacao: ""
            },
            {
                texto: "Suco.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Série ou Filme?",
        alternativas: [
            {
                texto: " Filme.",
                afirmacao: ""
            },
            {
                texto: "Série.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Barbie ou Monster High?",
        alternativas: [
            {
                texto: "Barbie",
                afirmacao: ""
            },
            {
                texto: "Monster High.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Toddy ou Nescau?",
        alternativas: [
            {
                texto: "Toddy.",
                afirmacao: ""
            },
            {
                texto: "Nescau.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Intel ou Amd ",
        alternativas: [
            {
                texto: "Amd.",
                afirmacao: "Amd é melhor mesmo."
            },
            {
                texto: "Intel.",
                afirmacao: "Opinião ruim. "
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
