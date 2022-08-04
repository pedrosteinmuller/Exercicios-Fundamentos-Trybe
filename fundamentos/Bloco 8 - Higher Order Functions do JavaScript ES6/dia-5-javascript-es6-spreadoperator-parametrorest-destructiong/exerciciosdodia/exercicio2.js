// escreva sum abaixo
const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);
console.log(sum(1, 2, 3, 4, 11));