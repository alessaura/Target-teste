function isFibonacci(n) {
    let a = 0;
    let b = 1;
    let fib = 0;
  
    while (fib < n) {
      fib = a + b;
      a = b;
      b = fib;
    }
  
    return fib === n;
  }
  
  // Exemplo de uso:
  let num = parseInt(prompt("Informe um número: ")); // ou pode ser definido previamente no código
  let result = isFibonacci(num);
  
  if (result) {
    console.log(`O número ${num} pertence à sequência de Fibonacci!`);
  } else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
  }

  