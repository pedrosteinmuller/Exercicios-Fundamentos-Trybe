const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const carros = ([nome, marca, ano]) => ({
  nome,
  marca,
  ano,
})

console.log(carros(palio));
console.log(carros(shelbyCobra));
console.log(carros(chiron));
