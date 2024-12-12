# Resumo - aula 04/09/2024 parte 1
Na aula de hoje aprendemos os conceitos iniciais sobre o github de criação de conta até o primeiro repositório
# Resumo da aula anterior parte 2
na aula de hoje demos segmento as configurações do github
# Resumo da aula do dia 18/09/2024
hoje e professora comentou sobre as atividades e recriou a atividade do dia 4/9 para os alunos que chegaram hoje e continuamos falando sobre o github e sua funções para subir uma pasta para o repositório criando um arquivo nomeado de "gitignore" e dentro dela escrevemos "/node_modules"
# Aula do dia 04/12/2024
aula do dia 04/12/2024 nesta aula aprendemos o que são paradigmas e o que são e para que servem objetos dentro de javascript e executamos algumas linhas de código para entender melhor como essas:

const estudante = {

  nome: "Tereza",

  idade: 32,

  matricula: "123456",

}

console.log(estudante.nome);

//notação por .

console.log(estudante["matricula"]);

//notação por colchetes

console.log(`Meu nome é ${estudante.nome} e tenho ${estudante.idade} anos.` );

//usando template string

console.log(estudante.matricula.substring(0, 3));

//método substring

​

for (const key in estudante) {

  console.log(estudante[key]);

}

//loop for..in

​

//Após isso foi passada uma atividade com a adição e alteração de objetos:

​

//Adicionar

estudante.matricula = "abcd123";

estudante.fones = ["35487799","98774586"];

​

console.log(estudante);

​

//Alterar

estudante.curso = "front-end";

estudante.fones = ["0000000","98774586"];

​

//Após isso tivemos uma atividade de função com objeto 

​

alert('Boas Vindas!')

const escolha = prompt("Digite 1, para adicionar. Digite 2, para remover.")

​

if(escolha === "1"){

  console.log(adicionar())

}

else{

  console.log("Não tem")

}

  

function adicionar() {

  const chave = prompt("Informe a chave: ")

const valor = prompt("Informe o valor: ")

  

estudante[chave] = valor

  return `Você inseriu os dados com sucesso! Os dados atualizados são: ${estudante.chave}`

}

​

//Aqui aprendemos a função de Deletar:

//Deletar

delete estudante.matricula; //notação de ponto

console.log(estudante);

​

delete estudante["idade"];//notação de array

console.log(estudante);
