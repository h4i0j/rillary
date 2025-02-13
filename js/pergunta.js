document.getElementById("calcular").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Por favor, insira números válidos.";
        return;
    }

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                document.getElementById("resultado").innerText = "Erro: divisão por zero!";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
});