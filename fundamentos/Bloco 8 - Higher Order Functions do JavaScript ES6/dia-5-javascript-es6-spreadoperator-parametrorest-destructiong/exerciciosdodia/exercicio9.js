
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons;

const meses = [...spring, ...summer, ...autumn, ...winter]

// const estacoes = ({ spring, summer, autumn, winter }) => [...spring, ...summer, ...autumn, ...winter]

console.log((meses));

