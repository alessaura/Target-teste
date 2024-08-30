
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K++;
  SOMA += K;
}

console.log(SOMA); // Output: 91

// Inicialmente, K = 0 e SOMA = 0.
// O loop Enquanto K < INDICE será executado enquanto K for menor que 13.
// Dentro do loop, K é incrementado em 1 e SOMA é incrementado em K.
// O loop será executado 13 vezes, pois K irá de 0 a 12.
// Ao final do loop, SOMA será a soma dos números de 1 a 13.