# Projeto de Criptografia de Texto

Bem-vindo ao projeto de Criptografia de Texto! Este projeto permite que você criptografe e descriptografe mensagens utilizando um sistema de substituição simples.

## Contexto do Desafio

Durante este desafio de duas semanas, nosso objetivo é criar uma aplicação web que criptografa textos para que você possa trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

### Chaves de Criptografia

As "chaves" de criptografia utilizadas são as seguintes:
- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"

### Requisitos

- A aplicação deve funcionar apenas com letras minúsculas.
- Não devem ser utilizadas letras com acentos nem caracteres especiais.
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
- "gato" => "gaitober"
- "gaitober" => "gato"

### Funcionalidades Extras

- Um botão que copia o texto criptografado/descriptografado para a área de transferência, similar à funcionalidade do Ctrl+C ou da opção "copiar" do menu de aplicativos.

## Estrutura do Projeto

### HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criptografia | Use agora</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="conteudo">
        <section class="cabecalho">
            <img class="imagem-logo" src="./assets/alura.png" alt="Imagem da Logo">
        </section>
        <section class="area-de-entrada">
            <textarea class="campo-de-entrada" spellcheck="false" placeholder="Digite seu texto"></textarea>
            <div class="aviso">
                <img class="alerta" src="./assets/alerta.png" alt="Icone de Alerta">
                <p>Apenas letras minúsculas e sem acento.</p>
            </div>
            <div class="area-btn">
                <button class="btn-criptografar" onclick="criptografar()">Criptografar</button>
                <button class="btn-descriptografar" onclick="descriptografar()">Descriptografar</button>
            </div>
        </section>
        <section class="area-de-saida">
            <div class="area-desativada">
                <textarea class="texto-decodificado" spellcheck="false"></textarea>
                <button class="btn-copiar" onclick="copiar()">Copiar</button>
            </div>
            <div class="area-ativada">
                <img class="area-ativa-imagem" src="./assets/conteudo-visual.png" alt="Imagem do Chat">
                <h2 class="area-ativa-titulo">Nenhuma mensagem encontrada</h2>
                <p class="area-ativa-paragrafo">Digite um texto que você deseja criptografar ou descriptografar.</p>
            </div>
        </section>
    </main>

    <script src="./app.js"></script>
</body>
</html>
```

### JavaScript

```javascript
function criptografar() {
    let textoOriginal = document.querySelector('.campo-de-entrada').value.toLowerCase();
    let textoCriptografado = '';

    for (let i = 0; i < textoOriginal.length; i++) {
        switch (textoOriginal[i]) {
            case 'e':
                textoCriptografado += 'enter';
                break;
            case 'i':
                textoCriptografado += 'imes';
                break;
            case 'a':
                textoCriptografado += 'ai';
                break;
            case 'o':
                textoCriptografado += 'ober';
                break;
            case 'u':
                textoCriptografado += 'ufat';
                break;
            default:
                textoCriptografado += textoOriginal[i];
        }
    }

    document.querySelector('.texto-decodificado').value = textoCriptografado;
    document.querySelector('.area-desativada').style.display = 'flex';
    document.querySelector('.area-ativada').style.display = 'none';
}

function descriptografar() {
    let textoCriptografado = document.querySelector('.campo-de-entrada').value.toLowerCase();
    let textoDescriptografado = '';

    textoDescriptografado = textoCriptografado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.querySelector('.texto-decodificado').value = textoDescriptografado;
    document.querySelector('.area-desativada').style.display = 'flex';
    document.querySelector('.area-ativada').style.display = 'none';
}

function copiar() {
    let textoDecodificado = document.querySelector('.texto-decodificado');

    textoDecodificado.select();
    textoDecodificado.setSelectionRange(0, 99999); /* Para dispositivos móveis */

    document.execCommand('copy');
    alert('Texto copiado para a área de transferência: ' + textoDecodificado.value);

    const areaAtivada = document.querySelector('.area-ativada');
    const areaDesativada = document.querySelector('.area-desativada');
    areaAtivada.style.display = 'flex';
    areaDesativada.style.display = 'none';
}
```

### CSS

```css
:root {
    --cor-principal: #0A3871;
    --cor-secundaria: #D8DFE8;
    --cor-de-fundo-primaria: #F3F5FC;
    --cor-de-fundo-secundaria: #ffffff;
    --cor-de-texto-primaria: #0A3871;
    --cor-de-texto-secundaria: #FFFFFF;
    --cor-de-texto-terciaria: #495057;
    --cor-de-texto-quartenaria: #343A40;
    --cor-de-sombra-primaria: #c3c3c3;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--cor-de-fundo-primaria);
    font-family: Arial, sans-serif;
}

.conteudo {
    display: flex;
    gap: 50px;
    padding: 3% 0 0 0;
}

.cabecalho {
    width: 10%;
}

.area-de-entrada {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 55%;
    padding: 7% 0 0 0;
}

.campo-de-entrada {
    background-color: var(--cor-de-fundo-primaria);
    width: 100%;
    height: 400px;
    border: none;
    outline: none;
    resize: none;
    font-size: 2rem;
}

.campo-de-entrada::placeholder {
    color: var(--cor-de-texto-primaria);
    opacity: 1;
}

.aviso {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    color: var(--cor-de-texto-terciaria);
    font-size: 0.75rem;
    width: 100%;
    padding-left: 0;
}

.area-btn {
    display: flex;
    justify-content: flex-start;
    gap: 24px;
    width: 100%;
    padding-left: 0;
    align-items: center;
}

.btn-criptografar, .btn-descriptografar, .btn-copiar {
    width: 328px;
    height: 67px;
    border-radius: 24px;
    font-size: 1rem;
    cursor: pointer;
}

.btn-criptografar {
    background-color: var(--cor-principal);
    color: var(--cor-de-texto-secundaria);
    border: none;
}

.btn-descriptografar {
    background-color: var(--cor-secundaria);
    color: var(--cor-de-texto-primaria);
    border: 1px solid var(--cor-principal);
}

.btn-copiar {
    background-color: var(--cor-de-fundo-secundaria);
    color: var(--cor-de-texto-primaria);
    border: 1px solid var(--cor-principal);
}

.area-de-saida {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    background-color: var(--cor-de-fundo-secundaria);
    border-radius: 32px;
    box-shadow: 1px 4px 10px var(--cor-de-sombra-primaria);
    padding: 20px;
}

.area-ativada, .area-desativada {


    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.area-ativada {
    display: flex;
}

.area-ativa-imagem {
    width: 336px;
    height: 304px;
}

.area-ativa-titulo {
    width: 80%;
    text-align: center;
    color: var(--cor-de-texto-quartenaria);
    font-size: 1.5rem;
}

.area-ativa-paragrafo {
    width: 80%;
    text-align: center;
    color: var(--cor-de-texto-terciaria);
    font-size: 1rem;
}

.texto-decodificado {
    background-color: var(--cor-de-fundo-secundaria);
    width: 100%;
    height: 400px;
    border: none;
    outline: none;
    resize: none;
    font-size: 1.5rem;
    color: var(--cor-de-texto-terciaria);
    padding: 10px;
}
```

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/criptografia-texto.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd criptografia-texto
   ```

3. Abra o arquivo `index.html` no seu navegador preferido.

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Você pode abrir uma issue ou enviar um pull request com suas sugestões e melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Bom projeto!
