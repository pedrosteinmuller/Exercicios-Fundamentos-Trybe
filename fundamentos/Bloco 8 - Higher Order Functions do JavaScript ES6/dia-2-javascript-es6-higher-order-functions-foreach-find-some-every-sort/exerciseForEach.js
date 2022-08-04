// Apresentar o nome e a nota final de todas as pessoas estudantes que tiverem média final das notas
// das avaliações (avaliacao, projeto e trabalho em grupo) maior ou igual a 7
// mediaFinal = (avaliacao + projeto + trabalhoGrupo) / 3

const pessoasEstudantes = [
  { nome: 'Alexandre', avaliacao: 7, projeto: 5.5, trabalhoGrupo: 8 },
  { nome: 'Marcondes', avaliacao: 6, projeto: 7.5, trabalhoGrupo: 5 },
  { nome: 'Rodrigo', avaliacao: 8.5, projeto: 9, trabalhoGrupo: 7 },
  { nome: 'Marcella', avaliacao: 8, projeto: 7, trabalhoGrupo: 4 },
  { nome: 'Adriana', avaliacao: 9, projeto: 7, trabalhoGrupo: 7 },
  { nome: 'Marlene', avaliacao: 7.5, projeto: 8, trabalhoGrupo: 7 },
];

pessoasEstudantes.forEach((itens) => {
  const mediaFinal = (itens.avaliacao + itens.projeto + itens.trabalhoGrupo) / 3;
  if (mediaFinal <=7)
  return mediaFinal;
  console.log(`${itens.nome} - ${mediaFinal}`);
});