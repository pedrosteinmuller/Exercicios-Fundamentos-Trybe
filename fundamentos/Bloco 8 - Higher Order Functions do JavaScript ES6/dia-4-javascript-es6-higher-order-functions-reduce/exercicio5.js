const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => {
  return array.reduce((acc, cur) => 
    acc + cur.split('').reduce((acc2, cur2) => {
      if (cur2 === 'a' || cur2 === 'A') return acc2 + 1;
      return acc2;
    }, 0), 0);
}

console.log(containsA(names));


