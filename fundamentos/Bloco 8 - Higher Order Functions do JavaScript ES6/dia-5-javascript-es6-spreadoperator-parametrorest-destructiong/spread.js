// const numbers = [1, 2, 3];

// const newArray = [...numbers, 4, 5, 6];
// console.log(newArray); 
// console.log(numbers); 

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months); 

// const people = {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
// };

// const about = {
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer',
// };

// const customer = { ...people, ...about };
// console.log(customer);


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maca', 'banana', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pera', 'uva', 'melao'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens ];
console.log(fruitSalad(specialFruit, additionalItens));

