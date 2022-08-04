// const estudantes = [
//   {
//     nome: 'Jorge',
//     sobrenome: 'Silva',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 67 },
//       { name: 'Português', nota: 79 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 65 },
//     ],
//   },
//   {
//     nome: 'Mario',
//     sobrenome: 'Ferreira',
//     idade: 15,
//     turno: 'Tarde',
//     materias: [
//       { name: 'Matemática', nota: 59 },
//       { name: 'Português', nota: 80 },
//       { name: 'Química', nota: 78 },
//       { name: 'Biologia', nota: 92 },
//     ],
//   },
//   {
//     nome: 'Jorge',
//     sobrenome: 'Santos',
//     idade: 15,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 76 },
//       { name: 'Português', nota: 90 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 80 },
//     ],
//   },
//   {
//     nome: 'Maria',
//     sobrenome: 'Silveira',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 91 },
//       { name: 'Português', nota: 85 },
//       { name: 'Química', nota: 92 },
//       { name: 'Biologia', nota: 90 },
//     ],
//   },
//   {
//     nome: 'Natalia',
//     sobrenome: 'Castro',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 70 },
//       { name: 'Português', nota: 70 },
//       { name: 'Química', nota: 60 },
//       { name: 'Biologia', nota: 50 },
//     ],
//   },
//   {
//     nome: 'Wilson',
//     sobrenome: 'Martins',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 80 },
//       { name: 'Português', nota: 82 },
//       { name: 'Química', nota: 79 },
//       { name: 'Biologia', nota: 75 },
//     ],
//   },
// ];

// const report = estudantes.map((estudante) => ({
//   name: estudante.nome,
//   materia: estudante.materias
//   .reduce((acc, materia) => acc.nota > materia.nota ? acc : materia).name
// }));

// console.log(report);

// // exemplo similar que cairá no projeto

// const nomesRepetidos = array.reduce((acc, curr) => {
//   if (Object.keys(acc).includes(curr)){
//     acc[curr]++;
//   } else{
//     acc[curr] = 1;
//   }
//   return acc;
// }, {});

// console.log(nomesRepetidos);

// exemplo igual do projeto

const clientesPorIdade = clientes.reduce(
  (acc, cliente) => {
    if (cliente.idade < 18) {
      acc.menorIdade++;
    } else {
      acc.adulto++;
    }
    return acc;
  },
  { adulto: 0, menorIdade: 0 }
);

console.log(clientesPorIdade);
