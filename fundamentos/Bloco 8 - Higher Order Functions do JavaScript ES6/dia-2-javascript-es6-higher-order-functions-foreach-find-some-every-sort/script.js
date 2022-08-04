let listaPessoas = ["pedro", "pedro1", "pedro2"];

const enviarEmail = (email) => {
  console.log(`email para ${email} foi enviado com sucesso!`);
};

listaPessoas.forEach((item, posicao, array) => {
  enviarEmail(item);
  console.log(`sua posicao e de: ${posicao}`);
  console.log(`a quantidade de pessoas é: ${array.length}`);
});


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// forma que o course apresenta:
// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };
// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// a forma que eu fiz do que entendi e deu certo ^^:
names.forEach((item, posicao) => {
  names[posicao] = item.toUpperCase();
})
console.log(names);

// Para fixar - 1

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

emailListInData.forEach((item) => {
  showEmailList(item);
})

// ---------------------------------------------------------------

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

// Para fixar - 2

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => (number % 3 === 0 && number % 5 === 0));
}

console.log(findDivisibleBy3And5())

// Para fixar - 2.1

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((item) => {
    if (item.length === 5){
      return item;
    }
  })
}

console.log(findNameWithFiveLetters());

// Para fixar 2.2

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((id) => id.id === '31031685' && id.title === 'Partita in C moll BWV 997');
}

console.log(findMusic('31031685'))


const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((musica) => musica.id === id);
}

console.log(findMusic('31031685'))

// -----------------------

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));

// Para fixar 3

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.every((nameExist) => nameExist === name);
};

console.log(hasName(names, 'Ana'))

//  Para fixar 3.1

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((condition) =>  people.age >= minimumAge);
}

console.log(verifyAges(people, 18));

// utilizando sort em um array de objeto

const gamers = [
  {
  name: 'Eduardo',
  points: [20, 22, 100, 10, 0]
},

{
  name: 'Ana',
  points: [0, 20, 10, 100, 100]
},
{
  name: 'Bob',
  points: [0, 100, 10, 5, 20]
},
{
  name: 'Carlo',
  points: [3, 20, 10, 10, 10]
}
];
 gamers.sort((a, b) => {
  let pointsA = 0;
  let pointsB = 0;
  a.points.forEach((element) => pointsA += element);
  b.points.forEach((element) => pointsB += element);
  return pointsA - pointsB;
 });
 console.log(gamers);