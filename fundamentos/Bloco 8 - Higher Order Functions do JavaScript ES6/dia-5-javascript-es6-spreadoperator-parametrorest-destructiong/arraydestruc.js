const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [saudacao, realizaSaudacao] = saudacoes;
console.log (realizaSaudacao(saudacao)); // Olá


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

; // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida)


let numerosPares = [1, 3, 5, 6, 8, 10, 12];
let paresCorretos = [6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares);


// ,,, pula o indice, no caso 3 indices