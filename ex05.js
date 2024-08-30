function invertString(str) {
    let invertedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      invertedStr += str[i];
    }
    return invertedStr;
  }
  
  // Exemplo de uso:
  let inputStr = prompt('Informe uma string: '); // ou pode ser previamente definida no código
  let invertedStr = invertString(inputStr);
  
  console.log(`String original: ${inputStr}`);
  console.log(`String invertida: ${invertedStr}`);