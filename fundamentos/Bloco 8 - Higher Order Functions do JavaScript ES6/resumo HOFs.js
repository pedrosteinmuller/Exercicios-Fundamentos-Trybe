console.log(
  `As HOFs são funções que usam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las.
  `
  );
  
  /* Aqui uma lista de conceitos aprendidos */

const array = [
  'bash',
  'git',
  'HTML',
  'CSS',
  'DOM',
  'Javascript',
  'JEST',
  'HOF',
];

/* Aqui uma função que imprime uma mensagem com cada um dos conceitos */

const funcao = (itens) => {
  for (const item of itens) {
    console.log(`Eu adorei aprender ${item} com o Giao!`);
  }
};

/* Aqui chama a função com o parâmetro array da linha 8 */

funcao(array);

/* Agora, vamos refatorar esta mesma função para aplicar os conceitos de HOF e Callback Function */
/* A funcaoCallback far a montagem de uma mensagem */

const funcaoCallback = (xablau) => {
  return `Eu adorei aprender ${xablau} com o Mano Gian!`;
};

console.log(`=-=-=-=-=-=-=-=
=-=-=-=-=-=-=-=`);

/* A funçãoHOF faz um laço de repetição que armazena o RETORNO da funcaoGenerica(param) numa variável e printa ela no console */

const funcaoHOF = (parametro, funcaoGenerica) => {
  for (const param of parametro) {
    const message = funcaoGenerica(param);
    console.log(message);
  }
};

/* Aqui chama a funcaoHOF com array e funcaoCallback como parâmetros */

funcaoHOF(array, funcaoCallback);