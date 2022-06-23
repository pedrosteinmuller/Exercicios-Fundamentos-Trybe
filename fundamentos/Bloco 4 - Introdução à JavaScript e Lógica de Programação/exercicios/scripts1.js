//conteudo da aula sobre logica programacao

// Nosso desafio
// Você deve criar um sistema que permita o cadastro de novos usuários nos sistemas da empresa.
// ,gerar senhas para todos os novos usuários.
// Inserir os novos usuários nos sistemas da empresa.
​
// let novosUsuarios = [
//   'Marcos',
//   'Camila',
//   'Adriana',
//   'Karla',
//   'José',
//   'Márcia',
//   'Michelle',
//   'Michel',
// ];
// ​
// let sistemas = ['Folha de Pagamento', 'RH', 'Treinamento', 'Slack', 'Zoom'];
// ​
// Requisitos
// 1 - O sistema deve fazer um controle de acesso e só liberar a execução das atividades 
//se a pessoa usuária fizer login no sistema 
//e tiver acesso liberado para realizar essas operações (Login: 'usuarioTrybe' com a senha: 'trybe2022');
// Se a pessoa usuária tiver acesso o sistema deve imprimir a mensagem "Acesso permitido!", 
//caso contrário a mensagem exibida será "Acesso negado!"
​
​
// O que fazer primeiro?
// Entender o problema e quebra-lo em pedaços menores
// - Precisamos saber onde guardar nosso login e senha?
// - Como podemos exibir a mensagem solicitada?
​
// let login = "usuarioTrybe";
// let senha = "trybe2022";
// let temAcesso = false;
// ​
// if (login === "usuarioTrybe" && senha === "trybe2022") {
//   console.log("Acesso permitido!")
//   temAcesso = true;
// } else {
//   console.log("Acesso negado!")
// }
​
​
// 2 - O sistema deve criar senhas iniciais aleatórias para os novos usuários no padrão "nome" + "_" + numero aleatório 
// vezes o ano de 2022
// Obs. A operação só deve ser realizada se a pessoa usuária tiver acesso a ela!
​
// if (temAcesso === true) {
//   console.log("--- Inicio gerador de senhas -----")
//   for (let index = 0; index < novosUsuarios.length; index += 1) {
//     let novaSenha = novosUsuarios[index] + "_" + Math.floor(Math.random() * 2022)
//     console.log("Usuario:", novosUsuarios[index], "senha:", novaSenha)
//   }
// } else {
//   console.log("Você não tem acesso para realizar essa operação")
// }
​
​
// 3 - Inserir os novos usuários nos sistemas da empresa (Criar uma lista do sistema e o nome dos usuários cadastrados)
// Obs. A operação sé deve ser realizada se a pessoa usuária tiver acesso a ela!
​
// if (temAcesso === true) {
//   console.log("---Acesso Liberado para cadastrar novos usuarios ----")
//   for (let index = 0; index < sistemas.length; index += 1) {
//     console.log("Sistema:", sistemas[index])
//     console.log("Usuarios:")
//     for (let index1 = 0; index1 < novosUsuarios.length; index1 += 1) {
//       console.log(index1, "-", novosUsuarios[index1])
//     }
//   }
​
// } else {
//   console.log("Você não tem acesso para realizar essa operação")
// }
​
​
// 4 - O sistema deve permitir a exclusão de um usuário da lista sempre que for necessário
// Obs. A operação sé deve ser realizada se a pessoa usuária tiver acesso a ela!
// Pesquisar: remover elemento de um array javascript no Google
​
// let usuarioParaExcluir = "Karla";
// ​
// if (temAcesso === true) {
//   for (let index = 0; index < novosUsuarios.length; index += 1) {
//     if (novosUsuarios[index] === usuarioParaExcluir) {
//       novosUsuarios.splice(index, 2)
//     }
//   }
// } else {
//   console.log("Você não tem acesso para realizar essa operação")
// }
// ​
// console.log(novosUsuarios)

// ---------------------------------------------------------------------------------------------------------------------------------------

// Desafios/Exercicios logica programacao dia 3 -------------------------

// 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
// A soma de 35 a 105 é: X.
// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.
// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
// Bônus: Crie a condição utilizando operador ternário.
// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova. (edited) 

// let soma = 0

// for(index = 35; index <= 105; index+=1)
// {
//     soma += index
// }
// console.log (`A soma de 35 a 105 é: ${soma}`)


// let soma = []

// for(index = 15; index <= 155; index+=1)
// {
//     if(index % 3 == 0)
//     {soma.push(index)}

// }

// for (index = 0; index < soma.length; index +=1)
// {
//    if (soma[index] % 2 != 0)
// }
// console.log (`A quantidade de números impares seja : ${soma.length}`)

// console.log(soma)

// ----------------------------------------------------------------------------------------------------------------------------------

// GABARITO

// ------------------------------------------------------------------------------------------------------------------------------------

// 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura "for" e retorne no formato:
// A soma de 35 a 105 é: X.
​
// let sum = 0;
​
// for(let count = 35; count <= 105; count = count + 1){
//   sum += count;
// }
​
// console.log('A soma total de 35 a 105 é: ' + sum);
​
// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.
​
// let counter = 0;
// for(let index = 15; index <= 155; index += 1) {
//     if(index % 3 === 0) {
//         counter += 1;
//     }
// }
​
// if(counter >= 50) {
//     console.log('secret Message!');
// }
​
/// 3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Jogador 1 vence" ou "Empate" ou "Jogador 2 vence". 
​
// let jogador1 = 'scissors';
// let jogador2 = 'stone'; 
​
// if (jogador1 == 'paper' && jogador2 == 'stone'){
//   console.log('Jogador 1 vence');
// } else if (jogador1 == 'stone' && jogador2 == 'scissors'){
//   console.log('Jogador 1 vence');
// } else if (jogador1 == 'scissors' && jogador2 == 'paper'){
//   console.log('Jogador 1 vence');
// } else if (jogador1 == jogador2){
//   console.log('Empate');
// } else{
//   console.log('Jogador 2 vence');
// }
​
// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade" ou "A pessoa é menor de idade".
// Bônus: Crie a condição utilizando operador ternário.
​
// let idade = 20;
// let saida;
​
// Com if/else
// if (idade >= 18) {
//   saida = 'maior de idade';
// } else {
//   saida = 'menor de idade';
// };
​
// console.log('A pessoa é ' + saida);
​
// Com operador ternário
// console.log(idade >= 18 ? 'A pessoa é maior de idade' : 'A pessoa é menor de idade');
​
// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// "Pessoa" é a mais nova.
​
// let idadeAdemar = 10;
// let idadeAdriana = 11;
// let idadeJulia = 29;
​
// if(idadeAdemar < idadeAdriana && idadeAdemar < idadeJulia){
//   console.log('Ademar é o mais novo')
// }
// else if (idadeAdriana < idadeAdemar && idadeAdriana < idadeJulia){
//   console.log('Adriana é a mais nova')
// } 
// else {
//   console.log('Julia é a mais nova')
// }


// RESOLUÇÃO DOS EXERCICIOS BLOCO 4 DIA 4

