function insert(numero) {
    var i = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = i + numero;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function backspace() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function adicionar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        // Verifica se o divisor é zero para evitar divisão por zero
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

function calcular() {
    //Esta linha obtém o conteúdo HTML dentro do elemento com o ID "resultado" e o armazena na var RESULTADO.
    var resultado = document.getElementById('resultado').innerHTML;
    console.log(resultado)
    if (resultado) {

        //     O padrão especificado é uma expressão regular que procura uma sequência de caracteres que corresponda a um número, 
        //     seguida de um operador (+, -, * ou /), seguido de outro número.
        //     (\d+\.?\d*) corresponde a um ou mais dígitos, seguido de um ponto opcional e zero ou mais dígitos adicionais. Isso representa um número.
        //     \s* corresponde a zero ou mais espaços em branco.
        //     ([+\-*/]) corresponde a um dos operadores matemáticos (+, -, * ou /).
        //     \s* corresponde a zero ou mais espaços em branco.
        //     (\d+\.?\d*) corresponde a um ou mais dígitos, seguido de um ponto opcional e zero ou mais dígitos adicionais. Isso representa outro número.

        // Se a expressão regular encontrar uma correspondência, os valores correspondentes serão armazenados em um array na variável expressao.
        var expressao = resultado.match(/(\d+\.?\d*)\s*([+\-*/])\s*(\d+\.?\d*)/);

        if (expressao && expressao.length === 4) {
            var operando1 = parseFloat(expressao[1]);
            var operador = expressao[2];
            var operando2 = parseFloat(expressao[3]);

            var resultadoCalculado;

            switch (operador) {
                case '+':
                    resultadoCalculado = adicionar(operando1, operando2);
                    console.log('Operador: +');
                    console.log('Operando1:', operando1);
                    console.log('Operando2:', operando2);
                    break;
                case '-':
                    resultadoCalculado = subtrair(operando1, operando2);
                    console.log('Operador: -');
                    console.log('Operando1:', operando1);
                    console.log('Operando2:', operando2);
                    break;
                case '*':
                    resultadoCalculado = multiplicar(operando1, operando2);
                    console.log('Operador: *');
                    console.log('Operando1:', operando1);
                    console.log('Operando2:', operando2);
                    break;
                case '/':
                    resultadoCalculado = dividir(operando1, operando2);
                    console.log('Operador: /');
                    console.log('Operando1:', operando1);
                    console.log('Operando2:', operando2);
                    break;
                default:
                    resultadoCalculado = "Operação inválida";
                    console.log(resultadoCalculado)
                    break;
            }

            document.getElementById('resultado').innerHTML = resultadoCalculado;
        } else {
            document.getElementById('resultado').innerHTML = "Operação inválida";
        }
    }
}
