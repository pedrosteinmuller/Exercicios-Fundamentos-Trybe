const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Com base no array de livros crie um novo objeto onde as chaves são o nome dos
//livros e os valores a quanto tempo o livro foi escrito

// const newBooks = (array) => 
//   array.reduce((acc, item) => {
//     acc[item.name] = 2022 - item.releaseYear;
//     return acc;
//   }, {});


// console.log(newBooks(books));


//Com base no array de livros crie um objeto onde as chaves são o genero e os valores um array com
//os nomes dos livros resultado esperado

const newerBooks = (arr) => {
 return arr.reduce((acumulador, item) => {
    if (!acumulador[item.genre]) {
      acumulador[item.genre] = [];
    } acumulador[item.genre].push(item.name);
    
    return acumulador;
  }, {})
};  
console.log(newerBooks(books));

          atividade mentoria esquenta codewars

function findSenior(list) {
  const highest = list.reduce((highestAge, age) => age.age > highestAge.age ? age : highestAge)
  return list.filter(({ age }) => age === highest.age)
  } 

  function getFirstPython(list) {
    const findDev = list.find((element) => element.language === 'Python')
    if (!findDev) {
    return 'There will be no Python developers'
    } 
    return `${findDev.firstName}, ${findDev.country}`
    } 

  function countLanguages(list) {
    return list.reduce((acc, curr) => {
    if (!acc[curr.language]) {
    acc[curr.language] = 0;
    }
    acc[curr.language] += 1;
    console.log(acc)
    return acc;
    }, {})
    } 

return array.map((number) => {
  return number * -1
})

