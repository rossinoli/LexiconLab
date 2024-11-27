function processarFrase(event) {
    if (event.key === 'Enter') {
        let frase = document.getElementById('phraseInput').value.trim();
        if (frase === "" || /\d/.test(frase)) { // Verificar se é vazio ou contém números
            alert("Por favor, digite uma frase sem números.");
            return; // Encerre a execução caso inválido
        }
        document.getElementById('resultadoOriginal').innerText = "Frase Original: " + frase;
    }
}

function contarCaracteres() {
    let frase = getValidPhrase();
    if(frase === null) return;
    let resultado = frase.replace(/\s/g, "").length;
    document.getElementById('contagemCaracteresResultado').innerText = "Número de caracteres (sem espaços): " + resultado;
}

function getValidPhrase() {
    let frase = document.getElementById('phraseInput').value.trim();
    if (frase === "" || /\d/.test(frase)) {
        alert("Por favor, digite uma frase sem números.");
        return null; 
    }
    return frase;
}
function removerEspacosExtras() {
    let frase = getValidPhrase();
    if(frase === null) return;
    let resultado = frase.replace(/\s+/g, " ").trim();
    document.getElementById('espacosRemovidosResultado').innerText = "Frase sem espaços extras: " + resultado;
}

function converterMaiusculasMinusculas() {
    let frase = getValidPhrase();
    if(frase === null) return;
    let maiusculas = frase.toUpperCase();
    let minusculas = frase.toLowerCase();
    document.getElementById('maiusculasResultado').innerText = "Maiúsculas: " + maiusculas;
    document.getElementById('minusculasResultado').innerText = "Minúsculas: " + minusculas;
}

function inverterString() {
    let frase = getValidPhrase();
    if(frase === null) return;
    let resultado = frase.split("").reverse().join("");
    document.getElementById('invertidaResultado').innerText = "Frase invertida: " + resultado;
}

function verificarPalindromo() {
    let frase = getValidPhrase();
    if(frase === null) return;
    let fraseLimpa = frase.replace(/\s/g, "").toLowerCase();
    let fraseInvertida = fraseLimpa.split("").reverse().join("");
    let resultado = fraseLimpa === fraseInvertida ? `Sim, "${frase}" é um palíndromo.` : "Não é um palíndromo.";
    document.getElementById('palindromoResultado').innerText = resultado;
}

function separarPalavras() {
    let frase = getValidPhrase();
    if(frase === null) return;
    let palavras = frase.toLowerCase().split(/\s+/);
    document.getElementById('palavrasResultado').innerText = "Palavras: [" + palavras.join(', ') + "]";
}

function ordenarPalavras() {
    let frase = getValidPhrase();
    if(frase === null) return;
    let palavras = frase.toLowerCase().split(/\s+/);
    palavras.sort();
    document.getElementById('palavrasOrdenadasResultado').innerText = "Palavras ordenadas: [" + palavras.join(', ') + "]";
}

function contarOcorrenciasPalavras() {
    let frase = getValidPhrase();
    if(frase === null) return;
    let palavras = frase.toLowerCase().split(/\s+/);
    let contagemPalavras = {};
    palavras.forEach(palavra => {
        contagemPalavras[palavra] = (contagemPalavras[palavra] || 0) + 1;
    });
    let resultado = "Contagem de palavras: ";
    for (let palavra in contagemPalavras) {
        resultado += `${palavra}: ${contagemPalavras[palavra]}, `;
    }
    document.getElementById('contagemPalavrasResultado').innerText = resultado;
}

function filtrarPalavras() {
    let frase = getValidPhrase();
    if(frase === null) return;
    let palavras = frase.toLowerCase().split(/\s+/);
    let palavrasFiltradas = palavras.filter(palavra => palavra.length > 5);
    document.getElementById('palavrasFiltradasResultado').innerText = "Palavras com mais de 5 caracteres: [" + palavrasFiltradas.join(', ') + "]";
}

function substituirPalavras() {
    let frase = getValidPhrase();
    if(frase === null) return;
    let palavraOriginal = prompt("Digite a palavra a ser substituída:");
    let palavraNova = prompt("Digite a palavra de substituição:");
    let resultado = frase.replace(new RegExp(palavraOriginal, 'gi'), palavraNova);
    document.getElementById('palavrasSubstituidasResultado').innerText = "Frase com palavras substituídas: " + resultado;
}