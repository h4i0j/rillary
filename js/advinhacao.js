// Número aleatório entre 1 e 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinharNumero() {
    // Obtendo o valor inserido pelo usuário
    let numeroEscolhido = parseInt(document.getElementById("numero").value);
    let dica = document.getElementById("dica");
    tentativas++;

    if (isNaN(numeroEscolhido) || numeroEscolhido < 1 || numeroEscolhido > 100) {
        dica.textContent = "Por favor, insira um número entre 1 e 100!";
        return;
    }

    // Verificando a tentativa
    if (numeroEscolhido === numeroAleatorio) {
        dica.textContent = `Parabéns! Você acertou o número em ${tentativas} tentativas!`;
    } else if (numeroEscolhido < numeroAleatorio) {
        dica.textContent = "Mais alto! Tente novamente.";
    } else {
        dica.textContent = "Mais baixo! Tente novamente.";
    }
}