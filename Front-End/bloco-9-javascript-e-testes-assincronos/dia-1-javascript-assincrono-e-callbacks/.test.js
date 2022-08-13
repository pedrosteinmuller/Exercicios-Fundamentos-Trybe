// test('Não deveria passar!', () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }, 500);
// });

// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(16);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });


// let cities = [];

// const addCity = (city) => {
//   cities.push(city);
// };

// const removeCity = (city) => {
//   cities = cities.filter((eachCity) => eachCity !== city);
// };

// test('Testa a função addCity', () => {
//   expect.assertions(4);
//   addCity('Campinas');
//   addCity('Goiania');
//   addCity('Recife');
//   expect(cities).toHaveLength(3);
//   expect(cities).toContain('Campinas');
//   expect(cities).toContain('Goiania');
//   expect(cities).toContain('Recife');
// });

// test('Testa a função removeCity', () => {
//   expect.assertions(4);
//   removeCity('Campinas');
//   expect(cities).toHaveLength(2);
//   expect(cities).not.toContain('Campinas');
//   expect(cities).toContain('Goiania');
//   expect(cities).toContain('Recife');
// });

// let cities = [];

// const addCity = (city) => {
//   cities.push(city);
// };

// const removeCity = (city) => {
//   cities = cities.filter((eachCity) => eachCity !== city);
// };

// beforeEach(() => {
//   cities = ['Pindamonhangaba'];
// });

// afterEach(() => {
//   cities = [];
// });

// test('Testa a função addCity utilizando o beforeEach', () => {
//   expect.assertions(3);
//   addCity('Piraporinha');
//   expect(cities).toHaveLength(2);
//   expect(cities).toContain('Pindamonhangaba');
//   expect(cities).toContain('Piraporinha');
// });

// test('Testa a função removeCity utilizando o beforeEach', () => {
//   expect.assertions(2);
//   removeCity('Pindamonhangaba');
//   expect(cities).not.toContain('Pindamonhangaba');
//   expect(cities).toHaveLength(0);
// });

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

describe('Agrupa o primeiro bloco de testes', () => {
  beforeEach(() => {
    cities = ['Pindamonhangaba'];
  });
  
  afterEach(() => {
    cities = [];
  });
  
  test('Testa a função addCity dentro do primeiro bloco de testes', () => {
    expect.assertions(3);
    addCity('Piraporinha');
    expect(cities).toHaveLength(2);
    expect(cities).toContain('Pindamonhangaba');
    expect(cities).toContain('Piraporinha');
  });
  
  test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  });
});

describe('Agrupa o segundo bloco de testes', () => {
  beforeEach(() => {
    cities = ['Tangamandapio'];
  });
  
  afterEach(() => {
    cities = [];
  });
  
  test('Testa a função addCity dentro do segundo bloco de testes', () => {
    expect.assertions(3);
    expect(cities).toHaveLength(1);
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toContain('Tangamandapio');
  });
  
  test('Testa a função removeCity dentro do segundo bloco de testes', () => {
    expect.assertions(2);
    removeCity('Tangamandapio');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  });
});