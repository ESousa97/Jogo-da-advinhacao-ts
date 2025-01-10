# Jogo do Número Secreto

Este projeto consiste em um **jogo interativo** de adivinhação, desenvolvido utilizando **HTML, CSS e JavaScript**. O jogador deve adivinhar um número secreto gerado aleatoriamente entre 1 e 10. O projeto inclui funcionalidades interativas, feedback dinâmico, controle de tentativas, reinício automático e suporte à API de síntese de voz para melhorar a experiência do usuário.

Este repositório também inclui desafios adicionais que exploram conceitos fundamentais de **JavaScript**.

---

## Estrutura do Projeto

O repositório possui a seguinte organização:

```
PROJECT ROOT
│
├── Day-1/              # Primeira versão do projeto
├── Day-2/              # Segunda versão com melhorias
├── Day-3/              # Terceira versão com contagem de tentativas
├── Day-4/              # Versão final do projeto
├── Finish/             # Código finalizado com síntese de voz
├── Desafios/           # Desafios práticos de JavaScript
│   ├── Desafio-1/      # Manipulação básica de DOM e funções simples
│   ├── Desafio-2/      # Funções com entrada de dados e lógica
│   ├── Desafio-3/      # Operações matemáticas e laços
│   └── Desafio-4/      # Manipulação de listas (arrays)
├── index.html          # Estrutura principal do jogo
├── style.css           # Estilização do jogo
└── app.js              # Lógica principal do jogo
```

---

## Funcionalidades Principais

### Jogo do Número Secreto
1. **Geração de Número Aleatório:**
   - O jogo gera um número aleatório entre 1 e 10 sem repetição até que todos os números sejam utilizados.

2. **Controle de Tentativas:**
   - O jogo contabiliza quantas tentativas o jogador precisou para acertar o número secreto.

3. **Feedback Interativo:**
   - Caso o palpite esteja incorreto, o jogo informa se o número secreto é **maior** ou **menor**.

4. **Reinício do Jogo:**
   - Ao acertar, o jogador pode reiniciar o jogo sem a necessidade de recarregar a página.

5. **Síntese de Voz:**
   - Utiliza a **Web Speech API** para verbalizar as mensagens exibidas na tela, proporcionando maior interatividade e acessibilidade.

6. **Interface Amigável:**
   - Estilização responsiva com **CSS**, garantindo boa experiência em diferentes dispositivos.

### Exemplo de Funcionamento

1. O jogo exibe a mensagem **"Escolha um número entre 1 e 10"**.
2. O jogador insere um número.
3. O jogo verifica o chute e fornece feedback:
   - "O número secreto é maior".
   - "O número secreto é menor".
4. Ao acertar:
   - A mensagem **"Acertou!"** é exibida junto com o número de tentativas.
   - O jogo habilita o botão **"Novo jogo"**.

---

## Desafios Adicionais

### **Desafio 1: Funções Simples**
- Manipulação de **DOM** e uso de **`alert`**, **`prompt`** e **console.log**.
- Funções incluem:
   - Exibir mensagens simples.
   - Capturar entradas do usuário e realizar soma.

### **Desafio 2: Lógica de Programação**
- Desenvolvimento de funções com lógica:
   - Calcular o dobro de um número.
   - Calcular a média de três números.
   - Retornar o maior entre dois números.
   - Multiplicar um número por ele mesmo.

### **Desafio 3: Operações Matemáticas**
- Funções para:
   - Calcular o **IMC**.
   - Calcular o **fatorial** de um número.
   - Converter **dólares em reais** com cotação fixa.
   - Calcular área e perímetro de **salas retangulares** e **circulares**.
   - Exibir a **tabuada** de um número.

### **Desafio 4: Manipulação de Arrays**
- Criação e manipulação de listas:
   - Adicionar elementos com **`push`**.
   - Acessar o **primeiro**, **segundo** e **último elemento** de um array.

---

## Tecnologias Utilizadas

- **HTML5:** Estrutura do jogo.
- **CSS3:** Estilização e responsividade.
- **JavaScript:** Lógica principal e interatividade.
- **Web Speech API:** Recurso para síntese de voz (navegadores modernos).

---

## Como Executar o Projeto

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/ESousa97/Explore-funcoes-e-listas
   ```

2. **Acesse o Diretório:**
   ```bash
   cd Explore-funcoes-e-listas
   ```

3. **Abra o Arquivo HTML no Navegador:**
   - Localize o arquivo `index.html`.
   - Abra-o em um navegador moderno (Google Chrome, Firefox, Edge).

---

## Personalização

- **Intervalo de Números:**
   - Altere a variável `numeroLimite` no `app.js` para mudar o intervalo padrão (1 a 10).

- **Velocidade da Voz:**
   - Modifique a propriedade `utterance.rate` na função `exibirTextoNaTela` para ajustar a velocidade da síntese de voz.

- **Estilização:**
   - Edite o arquivo `style.css` para alterar cores, fontes e layout.

---

## Funcionalidades Futuras

- Adicionar **modo difícil** com intervalos maiores.
- Implementar **temporizador** para desafiar o jogador.
- Salvar pontuações em **LocalStorage** para criar um sistema de ranking.

---

## Licença

Este projeto está licenciado sob a **MIT License**. Você pode usá-lo livremente para fins pessoais e educacionais.

---
<br>

**<a href="https://explore-funcoes-e-listas.vercel.app/">Divirta-se jogando e codando!</a> ⚡**

