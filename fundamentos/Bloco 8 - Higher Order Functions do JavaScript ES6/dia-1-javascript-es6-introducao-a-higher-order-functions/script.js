const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
}

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);

/////praticando...

const esperarPedido = (pedido) => {
  console.log('Esperando o pedido ' + pedido);
}

const fazerPedido = (callback) => {
  const comida = 'Pao';
  console.log('Pedido realizado ' +  comida)
  callback(comida);
}

fazerPedido(esperarPedido);


// --------------------------------------------------------------------------------------------------

const generator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(generator));

// --------------------------------------------------------------------------------------------------------


const numberCheck = (myNumber, number) => myNumber === number;

const lottery = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? 'Parabéns você ganhou!' : 'Tente novamente';
}

console.log(lottery(5, numberCheck));

// --------------------------------------------------------------------------------------------------------

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareValues = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } if (rightAnswers === 'N.A') {
    return 0;
  }
    return -0.5;
}

const countPoints = (rightAnswers, studentAnswers, callback) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const callbackReturn = callback(rightAnswers[index], studentAnswers[index]);
    contador += callbackReturn;
}
return `Resultado da pontuação: ${contador} pontos.`
}
console.log(countPoints(rightAnswers, studentAnswers, compareValues));

// sum -= 20 (desconto de 20
// const desconto20Reais = () => 20;

// const desconto20% = (sum) => sum * 0.2 (somar desconto 1.2)

