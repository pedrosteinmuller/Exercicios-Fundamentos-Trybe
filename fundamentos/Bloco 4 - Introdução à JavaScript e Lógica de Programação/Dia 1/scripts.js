// const myName = "Pedro Steinmuller";
// const birthCity = "Campina Grande";
// let birthYear = "2030";


// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// let movie = "Avengers"; //string literal
// let score = 10; //number literal
// let isValid = true; //boolean
// let name; //undefined
// let color = null; //redefinição

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientAge)

// let trybe = 19.44;

// if (trybe >=14 && trybe < 14.40) {
//     console.log("Esquenta");
// }

// else if (trybe >= 16.30 && trybe < 17.50) {
//     console.log("Aula ao vivo");
// }

// else if (trybe >= 19.40 && trybe < 20) {
//     console.log("Fechamento");
// }

// else {
//     console.log("Fora dos momentos síncronos");
// }

// const comida = 'pão na chapa';
// const bebida = 'cafezinho';

// if (bebida === 'cafezinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo);

// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// Exercício 1 abaixo


// const a = 10;
// const b = 5;

// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

// Exercício 2 abaixo


// const a = 10;
// const b = 11;

// if (a > b) {
//   console.log("'a' é maior que 'b'");
// } else {
//   console.log("'b' é maior que 'a'");
// }

// Exercício 3 abaixo


// const a = 12;
// const b = 8;
// const c = 6;

// if (a > b && a > c) {
//   console.log('O maior número é: ' + a + ' (a)');
// } else if (b > a && b > c) {
//   console.log('O maior número é: ' + b + ' (b)');
// } else {
//   console.log('O maior número é: ' + c + ' (c)');
// }

// Exercício 4 abaixo

// const number = -2;

// if (number > 0) {
//   console.log('positivo');
// } else if (number < 0) {
//   console.log('negativo');
// } else {
//   console.log('zero');
// }

// Exercício 5 abaixo


// let anguloInternoA = 50;
// let anguloInternoB = 100;
// let anguloInternoC = -30;

// let somaDosAngulos = anguloInternoA + anguloInternoB + anguloInternoC;

// let todosAngulosSaoPositivos = anguloInternoA > 0 && anguloInternoB > 0 && anguloInternoC > 0;

// if(todosAngulosSaoPositivos){
//   if (somaDosAngulos === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//   console.log('Erro: ângulo inválido');
// }

// Exercício 6 abaixo

// const pecaXadrez = 'Torre';

// switch (pecaXadrez.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
//     break;
// }

// Exercício 7 abaixo


// const nota = 14;

// if (nota < 0 || grade > 100) {
//   console.log("Erro, nota incorreta!");
// } else if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 70) {
//   console.log("C");
// } else if (grade >= 60) {
//   console.log("D");
// } else if (grade >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }

// Exercício 8 abaixo


// const a = 3;
// const b = 5;
// const c = 7;

// let ePar = false;

// if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//   ePAr = true;
// };
// console.log(ePar);

// Exercício 9 abaixo


// const a = 1;
// const b = 3;
// const c = 5;

// let eImpar = false;

// if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
//   eImpar = true;
// };
// console.log(eImpar)

// Exercício 10 abaixo


// const custoDoProduto = 1;
// const valorDeVenda = 3;

// if (custoDoProduto >= 0 && valorDeVenda >= 0) {
//   const totalCustoDoProduto = custoDoProduto * 1.2;
//   const lucroTotal = (valorDeVenda - totalCustoDoProduto) * 1000;
//   console.log(lucroTotal);
// } else {
//   console.log("Error, os valores não podem ser negativos");
// };

// Exercício 11 abaixo


// let aliquotaINSS;
// let aliquotaIR;

// const salarioBruto = 1000.00;

// if (salarioBruto <= 1556.94) {
//   aliquotaINSS = salarioBruto * 0.08;
// } else if (salarioBruto <= 2594.92) {
//   aliquotaINSS = salarioBruto * 0.09;
// } else if (salarioBruto <= 5189.82) {
//   aliquotaINSS = salarioBruto * 0.11;
// } else {
//   aliquotaINSS = 570.88;
// }

// const salarioBase = salarioBruto - aliquotaINSS;

// if (salarioBase <= 1903.98) {
//   aliquotaIR = 0;
// } else if (salarioBase <= 2826.65) {
//   aliquotaIR = (salarioBase * 0.075) - 142.80;
// } else if (salarioBase <= 3751.05) {
//   aliquotaIR = (salarioBase * 0.15) - 354.80;
// } else if (salarioBase <= 4664.68) {
//   aliquotaIR = (salarioBase * 0.225) - 636.13;
// } else {
//   aliquotaIR = (salarioBase * 0.275) - 869.36;
// };

// console.log("Salário: " + (salarioBase - aliquotaIR));



