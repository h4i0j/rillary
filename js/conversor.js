function converter() {
    let tipo = document.getElementById("tipoConversao").value;
    let valor = parseFloat(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultado.textContent = "Digite um número válido!";
        return;
    }

    let conversao;
    if (tipo === "metros") {
        conversao = valor / 1000;
        resultado.textContent = `${valor} metros = ${conversao} quilômetros`;
    } else if (tipo === "quilos") {
        conversao = valor * 1000;
        resultado.textContent = `${valor} quilos = ${conversao} gramas`;
    } else if (tipo === "celsius") {
        conversao = (valor * 9/5) + 32;
        resultado.textContent = `${valor}°C = ${conversao.toFixed(2)}°F`;
    }
}