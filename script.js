const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma cidade onde todos seguem as tendências da moda ditadas por celebridades. Uma nova tendência surgiu: roupas que brilham no escuro, inspiradas por um famoso cantor. Você decide:",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Seguir cegamente tendências pode tirar a individualidade das pessoas."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Brilhar no escuro é divertido e faz todos se destacarem!"
            }
        ]
    },
    {
        enunciado: "Todos estão falando sobre um novo desafio viral nas redes sociais que envolve saltar de locais altos com a promessa de ficar famoso. Seus amigos estão animados para tentar. Você pensa:",
        alternativas: [
            {
                texto:"Isso é maravilhoso!" ,
                afirmacao: "Desafios virais trazem emoção e aventura para a vida cotidiana!"
            },
            {
                texto: "Isso é assustador!",
                afirmacao: " Desafios perigosos podem levar a acidentes graves e incentivar comportamentos irresponsáveis."
            }
        ]
    },
    {
        enunciado: "O governo decide usar influenciadores digitais para promover suas políticas e decisões importantes. Eles começam a fazer lives diárias explicando novas leis. Você sente que:",
        alternativas: [
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Isso torna as informações mais acessíveis e fáceis de entender!"
            },
            {
                texto: "Isso é assustador!.",
                afirmacao: "Isso pode manipular a opinião pública e diminuir a transparência das informações."
            }
        ]
    },
    {
        enunciado: "Estão organizando um grande evento onde jogadores profissionais de videogame competem ao vivo em um jogo controverso que envolve temas violentos. A cidade inteira está empolgada, e você reflete que:",
        alternativas: [
            {
                texto:"Isso é maravilhoso." ,
                afirmacao: "Eventos de videogame são emocionantes e unem as pessoas através da competição!"
            },
            {
                texto: "Isso é assustador!",
                afirmacao: " A glorificação da violência nos jogos pode ter um impacto negativo no comportamento das pessoas."
            }
        ]
    },
    {
        enunciado: "Uma empresa de tecnologia desenvolveu um dispositivo que permite criar deepfakes perfeitos de qualquer pessoa. Eles estão sendo usados amplamente em filmes e shows. Ao ver isso, você acha:",
        alternativas: [
            {
                texto: "Isso é animador!",
                afirmacao: "Deepfakes perfeitos trazem novas possibilidades criativas para o entretenimento!"
            },
            {
                texto:"Isso é animador!" ,
                afirmacao: "  Deepfakes podem ser usados para enganar e manipular, prejudicando a confiança pública."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();