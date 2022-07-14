const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  
  return oddsAndEvens;
};

const sortedArray = sortOddsAndEvens();

console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);

// bonus (outra forma de resolver);

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

const fatorial = (number) => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }

  return result;
};
console.log(fatorial(5));


const fatorial = number => number > 1 ? number * fatorial(number - 1) : 1;
console.log(factorial(2));

const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray){
    if(word.length > maxLength){
      maxLength = word.length
      result = word
    }
  }
  return result
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));
