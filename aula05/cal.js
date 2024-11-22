// Funções para as operações matemáticas
function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Divisão por zero não é permitida";
    }
  }
  
  // Exemplos de uso
  console.log(soma(5, 3));           // Resultado: 8
  console.log(subtracao(10, 7));     // Resultado: 3
  console.log(multiplicacao(2, 4));  // Resultado: 8
  console.log(divisao(10, 2));       // Resultado: 5
  console.log(divisao(8, 0));        // Resultado: Divisão por zero não é permitida
  