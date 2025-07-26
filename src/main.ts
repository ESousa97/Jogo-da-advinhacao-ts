import './style.css'

// Arrays de mensagens divertidas do robô (sem emojis)
const mensagensRobo = {
  numeroMaior: [
    "Voe mais alto! O número é MAIOR!",
    "Pense GRANDE! Vai que é maior!",
    "Suba mais! Seu número tá baixinho!",
    "Mira mais alto, atirador!",
    "Escale essa montanha! É maior!",
    "Sonhe maior! O número também é!",
    "Decole! O número está nas alturas!",
    "Que tal um número mais circus?",
    "Arremesse mais alto! Acima da cesta!",
    "A montanha-russa sobe! O número também!",
    "Continua escalando! Mais alto!",
    "Infle mais! O número tá maior!",
    "Construa mais alto! Como um arranha-céu!",
    "Houston, precisamos ir MAIS ALTO!",
    "Alcance as estrelas! O número está lá!",
    "Que drama! Precisa ser maior!",
    "Voe como uma águia! Mais alto!",
    "O número está no trapézio! Lá em cima!",
    "Everest! O número é gigante!",
    "Mire no topo da torre! Maior!"
  ],
  numeroMenor: [
    "Desce um pouco! O número é MENOR!",
    "Pisa no freio! Muito alto!",
    "Cava mais fundo! É menor!",
    "Como um esquilo! Desce da árvore!",
    "Mergulha! O número tá embaixo!",
    "Mira mais baixo, precisão!",
    "Pega o metrô! Vai pra baixo!",
    "Desce do trapézio! É menor!",
    "Desliza ladeira abaixo!",
    "Nada mais fundo! Menor!",
    "Esquie descendo a montanha!",
    "A montanha-russa desce! Menor!",
    "Paraquedas aberto! Descendo!",
    "Como uma aranha! Desce pela teia!",
    "Corre ladeira abaixo! Menor!",
    "Que suspense! Precisa descer!",
    "Como um pinguim! Desliza!",
    "O palhaço caiu! Menor!",
    "Ancora o navio! Vai pra baixo!",
    "Surfa a onda! Desce!"
  ],
  acerto: [
    "EUREKA! Você é um gênio!",
    "PERFEITO! Você merece um troféu!",
    "BULLS-EYE! Que mira fantástica!",
    "FANTÁSTICO! Você decolou!",
    "SENSACIONAL! Você é uma estrela!",
    "INCRÍVEL! Você roubou o show!",
    "BRILHANTE! Seu cérebro é uma máquina!",
    "MAGNÍFICO! Que performance!",
    "ARRASOU! Você está pegando fogo!",
    "DIAMANTE! Você é precioso!",
    "OBRA PRIMA! Você é um artista!",
    "CAMPEÃO! Medalha de ouro!",
    "ESPETACULAR! Que show!",
    "ELETRIZANTE! Que energia!",
    "BRILHOU! Como uma supernova!",
    "CERTEIRO! Sniper de números!",
    "ROBIN HOOD! Acertou na mosca!",
    "CELEBRAÇÃO! Você mandou bem!"
  ],
  invalido: [
    "Opa! Número entre 1 e 10, por favor!",
    "Ei, mágico! Tire um número DA CARTOLA!",
    "Foco! Entre 1 e 10, atirador!",
    "ERRO 404: Número válido não encontrado!",
    "Que drama! Digite um número real!",
    "O palhaço fugiu! Número entre 1 e 10!",
    "Game over! Número inválido!",
    "Abracadabra! Tente entre 1 e 10!",
    "Recalculando rota! 1 a 10, please!",
    "Ops! Derrubou as bolas! Entre 1 e 10!"
  ]
}

// Interfaces para tipagem
interface GameState {
  numeroSecreto: number
  tentativas: number
  listaNumerosSorteados: number[]
  numeroLimite: number
  jogoAtivo: boolean
}

// Estado inicial do jogo
const gameState: GameState = {
  numeroSecreto: 0,
  tentativas: 0,
  listaNumerosSorteados: [],
  numeroLimite: 10,
  jogoAtivo: true
}

// Elementos do DOM
const elementos = {
  titulo: document.querySelector<HTMLHeadingElement>('h1')!,
  paragrafo: document.querySelector<HTMLParagraphElement>('.texto__paragrafo')!,
  input: document.querySelector<HTMLInputElement>('.container__input')!,
  botaoChutar: document.querySelector<HTMLButtonElement>('#chutar')!,
  botaoReiniciar: document.querySelector<HTMLButtonElement>('#reiniciar')!,
  contadorTentativas: document.querySelector<HTMLSpanElement>('#tentativas-count')!
}

// Função para exibir texto na tela com síntese de voz
function exibirTextoNaTela(elemento: HTMLElement, texto: string): void {
  elemento.innerHTML = texto

  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(texto)
    utterance.lang = 'pt-BR'
    utterance.rate = 1.2
    window.speechSynthesis.speak(utterance)
  }
}

// Função para exibir mensagem inicial
function exibirMensagemInicial(): void {
  exibirTextoNaTela(elementos.titulo, 'Jogo do Número Secreto')
  exibirTextoNaTela(elementos.paragrafo, `Escolha um número entre 1 e ${gameState.numeroLimite}`)
}

// Função para gerar número aleatório único
function gerarNumeroAleatorio(): number {
  const numeroEscolhido = Math.floor(Math.random() * gameState.numeroLimite) + 1

  // Reset da lista quando todos os números foram sorteados
  if (gameState.listaNumerosSorteados.length === gameState.numeroLimite) {
    gameState.listaNumerosSorteados = []
  }

  // Recursão para evitar números repetidos
  if (gameState.listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
  } else {
    gameState.listaNumerosSorteados.push(numeroEscolhido)
    console.log('Números sorteados:', gameState.listaNumerosSorteados)
    return numeroEscolhido
  }
}

// Função para limpar o campo de input
function limparCampo(): void {
  elementos.input.value = ''
}

// Função para obter mensagem aleatória
function obterMensagemAleatoria(categoria: keyof typeof mensagensRobo): string {
  const mensagens = mensagensRobo[categoria]
  return mensagens[Math.floor(Math.random() * mensagens.length)]
}

// Função para atualizar o speech bubble do robô
function atualizarSpeechBubble(mensagem: string): void {
  const speechBubble = document.querySelector('.ai-speech-bubble span')
  if (speechBubble) {
    speechBubble.textContent = mensagem
  }
}

// Função para atualizar contador de tentativas
function atualizarContadorTentativas(): void {
  if (elementos.contadorTentativas) {
    elementos.contadorTentativas.textContent = gameState.tentativas.toString()
  }
}

// Função para verificar o chute do jogador
function verificarChute(): void {
  if (!gameState.jogoAtivo) return

  // Incrementar tentativas no início da verificação
  gameState.tentativas++
  atualizarContadorTentativas()

  const chute = parseInt(elementos.input.value)

  // Validação do input
  if (isNaN(chute) || chute < 1 || chute > gameState.numeroLimite) {
    const mensagemInvalida = obterMensagemAleatoria('invalido')
    exibirTextoNaTela(elementos.paragrafo, mensagemInvalida)
    atualizarSpeechBubble('Número inválido!')
    limparCampo()
    return
  }

  if (chute === gameState.numeroSecreto) {
    // Jogador acertou
    const mensagemAcerto = obterMensagemAleatoria('acerto')
    exibirTextoNaTela(elementos.titulo, mensagemAcerto)

    const palavraTentativa = gameState.tentativas > 1 ? 'tentativas' : 'tentativa'
    const mensagemTentativas = `Você descobriu o número secreto com ${gameState.tentativas} ${palavraTentativa}!`
    exibirTextoNaTela(elementos.paragrafo, mensagemTentativas)

    atualizarSpeechBubble('Você é demais!')

    // Habilitar botão reiniciar e desabilitar jogo
    elementos.botaoReiniciar.disabled = false
    elementos.botaoChutar.disabled = true
    gameState.jogoAtivo = false

    // Adicionar classe de celebração
    document.querySelector('.container')?.classList.add('game-won')
  } else {
    // Dica para o jogador
    if (chute > gameState.numeroSecreto) {
      const mensagemMenor = obterMensagemAleatoria('numeroMenor')
      exibirTextoNaTela(elementos.paragrafo, mensagemMenor)
      atualizarSpeechBubble('Muito alto! Desce aí!')
    } else {
      const mensagemMaior = obterMensagemAleatoria('numeroMaior')
      exibirTextoNaTela(elementos.paragrafo, mensagemMaior)
      atualizarSpeechBubble('Muito baixo! Sobe mais!')
    }
  }

  limparCampo()
}

// Função para reiniciar o jogo
function reiniciarJogo(): void {
  gameState.numeroSecreto = gerarNumeroAleatorio()
  gameState.tentativas = 0
  gameState.jogoAtivo = true

  limparCampo()
  exibirMensagemInicial()

  // Resetar o speech bubble do robô
  atualizarSpeechBubble('Estou pensando em um número...')

  // Atualizar contador de tentativas
  atualizarContadorTentativas()

  // Remover classe de celebração
  document.querySelector('.container')?.classList.remove('game-won')

  elementos.botaoReiniciar.disabled = true
  elementos.botaoChutar.disabled = false
}

// Event Listeners
elementos.botaoChutar.addEventListener('click', verificarChute)
elementos.botaoReiniciar.addEventListener('click', reiniciarJogo)

// Permitir Enter para chutar
elementos.input.addEventListener('keypress', (event: KeyboardEvent) => {
  if (event.key === 'Enter' && gameState.jogoAtivo) {
    verificarChute()
  }
})

// Inicialização do jogo
function inicializarJogo(): void {
  gameState.numeroSecreto = gerarNumeroAleatorio()
  exibirMensagemInicial()
  atualizarSpeechBubble('Estou pensando em um número...')
  atualizarContadorTentativas()
  elementos.botaoReiniciar.disabled = true
}

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', inicializarJogo)

// === DESAFIOS ADICIONAIS ===

// Namespace para organizar os desafios
namespace Desafios {
  
  // Desafio 1: Funções básicas
  export function helloWorld(): void {
    console.log("Olá, mundo!")
  }
  
  export function cumprimentarPessoa(nome: string): void {
    console.log(`Olá, ${nome}!`)
  }
  
  export function dobrarNumero(numero: number): number {
    return numero * 2
  }
  
  export function calcularMedia(n1: number, n2: number, n3: number): number {
    return (n1 + n2 + n3) / 3
  }
  
  export function encontrarMaior(n1: number, n2: number): number {
    return Math.max(n1, n2)
  }
  
  export function quadrado(numero: number): number {
    return numero * numero
  }
  
  // Desafio 2: Operações matemáticas
  export function calcularIMC(altura: number, peso: number): number {
    return peso / (altura * altura)
  }
  
  export function calcularFatorial(n: number): number {
    if (n <= 1) return 1
    return n * calcularFatorial(n - 1)
  }
  
  export function converterDolarParaReal(valorDolar: number, cotacao: number = 4.80): number {
    return valorDolar * cotacao
  }
  
  export function calcularAreaRetangulo(altura: number, largura: number): { area: number, perimetro: number } {
    return {
      area: altura * largura,
      perimetro: 2 * (altura + largura)
    }
  }
  
  export function calcularAreaCirculo(raio: number): { area: number, perimetro: number } {
    const PI = 3.14159
    return {
      area: PI * raio * raio,
      perimetro: 2 * PI * raio
    }
  }
  
  export function gerarTabuada(numero: number): string[] {
    const tabuada: string[] = []
    for (let i = 1; i <= 10; i++) {
      tabuada.push(`${numero} x ${i} = ${numero * i}`)
    }
    return tabuada
  }
  
  // Desafio 3: Manipulação de arrays
  export function criarListaLinguagens(): string[] {
    return ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go', 'Rust']
  }
  
  export function adicionarLinguagem(lista: string[], linguagem: string): string[] {
    return [...lista, linguagem]
  }
  
  export function obterPrimeiroElemento<T>(lista: T[]): T | undefined {
    return lista[0]
  }
  
  export function obterUltimoElemento<T>(lista: T[]): T | undefined {
    return lista[lista.length - 1]
  }
}

// Exportar para uso global (opcional)
(window as any).Desafios = Desafios

// Exemplos de uso dos desafios (comentados para não poluir o console)
/*
console.log('=== TESTANDO DESAFIOS ===')
Desafios.helloWorld()
Desafios.cumprimentarPessoa('João')
console.log('Dobro de 5:', Desafios.dobrarNumero(5))
console.log('Média de 4,6,8:', Desafios.calcularMedia(4, 6, 8))
console.log('Maior entre 10 e 15:', Desafios.encontrarMaior(10, 15))
console.log('5 ao quadrado:', Desafios.quadrado(5))
console.log('IMC (1.75m, 70kg):', Desafios.calcularIMC(1.75, 70))
console.log('Fatorial de 5:', Desafios.calcularFatorial(5))
console.log('$100 em reais:', Desafios.converterDolarParaReal(100))
console.log('Área retângulo 5x3:', Desafios.calcularAreaRetangulo(5, 3))
console.log('Área círculo r=4:', Desafios.calcularAreaCirculo(4))
console.log('Tabuada do 7:', Desafios.gerarTabuada(7))

const linguagens = Desafios.criarListaLinguagens()
console.log('Linguagens:', linguagens)
console.log('Primeira:', Desafios.obterPrimeiroElemento(linguagens))
console.log('Última:', Desafios.obterUltimoElemento(linguagens))
*/
