function calcularIMC() {
    // Obtendo os valores de peso e altura dos inputs
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // Verificando se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Calculando o IMC
    let imc = peso / (altura * altura);

    // Exibindo o IMC
    document.getElementById('resultado').innerText = `Seu IMC é: ${imc.toFixed(2)}`;

    // Classificando o IMC
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso ideal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    // Exibindo a classificação
    document.getElementById('classificacao').innerText = `Classificação: ${classificacao}`;
}