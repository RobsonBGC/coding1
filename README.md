# Resumo - aula 04/09/2024 parte 1
Na aula de hoje aprendemos os conceitos iniciais sobre o github de criação de conta até o primeiro repositório

# Resumo da aula anterior parte 2
na aula de hoje demos segmento as configurações do github e aprendemos sobre as Variáveis e atribuições de variáveis, suas funções e seus tipos como por exemplo 
Var-É mais antiga forma de definir variáveis no javascript, ela pode ser reatribuída e redeclarada. Diferentemente da const e da let ela não tem escopo de bloco.
Let-A let junto com a const vieram no es6 (atualização de 2015). Ela também pode ter o seu valor reatribuido mas não pode ser redeclarado.
Const-A const (constante) não pode ter seu valor reatribuído nem redeclarado. Diferentemente da let e da var. E assim com a let ela também tem escopo de bloco.
**Exemplo prático:**
```Js
const popular = 'oi'
if (2 > 1) {
  //escopo local
  console.log(popular)
}
```
# Resumo da aula do dia 18/09/2024
hoje e professora comentou sobre as atividades e recriou a atividade do dia 4/9 para os alunos que chegaram hoje e continuamos falando sobre o github e sua funções para subir uma pasta para o repositório criando um arquivo nomeado de "gitignore" e dentro dela escrevemos:
```
/node_modules
git status
git add
git commit
```
entre outros.

# Aula 1 sobre if/else com atividade passada em sala no dia 23/10/2024
Nesta aula aprendemos mais sobre if e else com exemplos e uma atividade prática passada em sala. 
```Js
let decisao = prompt("Escolha: '1', para abrir a porta,'2', para fechar a porta e '3', para deixar entreaberta");

if (decisao == 1)
{
 console.log("A lâmpada está acesa") 
}
else if(decisao == 2 ||decisao == 3)
{
 console.log("A lâmpada está apagada")
}
else {
  console.log("esta opção não existe")
}
```
//Exercício 1//
```Js
alert("Bem vindo ao nosso autoatendimento da UPA");

let servico = prompt("Esolha uma das opções para ser melhor atendido: 1, para 'Emergência'. 2, para 'Atendimento geral'. 3, para 'Marcar consulta' e 4, para sair. ")
if (servico == 1){
  console.log("você selecionou 'Emergência'. retire a ficha abaixo e aguarde ser chamado(a) no balcão")
}
else if(servico == 2){
  console.log("você selecionou 'Atendimento geral' retire a ficha abaixo e aguarde ser chamado(a) no balcão")
}
else if(servico == 3){
  console.log("você selecionou 'Marcar consulta' retire a ficha abaixo e aguarde ser chamado(a) no balcão")
}
else if(servico == 4){
  console.log("fechando serviço...")
}
else{
  console.log("Esta opção é inválida")
}
```
# Resumo da aula do dia 13/11/2024
Nesta aula aprendemos o conceito e a usabilida da função "function" com exemplos e atividades em sala de aula.
```Js
function mediaMat(prova, redacao) {
  return (prova+redacao)/2
}

console.log(mediaMat(8, 8));
```
```Js
function dobro(num) {
  return num * 2
}

console.log(dobro(12));
```

```Js
function calcularM(nota1, nota2, nota3) {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}

console.log(calcularM(5, 6, 8));
```
```Js
function ordenar(a, b) {
  if (a <= b) {
    return [a, b]
  } else {
    return [b, a]
  }
}

console.log(ordenar(3,1));
```

```Js
const notas = [5, 9, 10, 6, 7]

function resultado (notas) {
  let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/notas.length
  return media
}

console.log (`O resultado da media é, ${resultado (notas)}`)
```

# Aula do dia 04/12/2024
aula do dia 04/12/2024 nesta aula aprendemos o que são paradigmas e o que são e para que servem objetos dentro de javascript e executamos algumas linhas de código para entender melhor como essas:
```Js
const estudante = {

  nome: "Tereza",

  idade: 32,

  matricula: "123456",

}

console.log(estudante.nome);
```
//notação por .
```Js
console.log(estudante["matricula"]);
```
//notação por colchetes
```Js
console.log(`Meu nome é ${estudante.nome} e tenho ${estudante.idade} anos.` );
```
//usando template string
```Js
console.log(estudante.matricula.substring(0, 3));
```
//método substring

​
```Js
for (const key in estudante) {

  console.log(estudante[key]);

}

//loop for..in
```
​

//Após isso foi passada uma atividade com a adição e alteração de objetos:

​

//Adicionar
```Js
estudante.matricula = "abcd123";

estudante.fones = ["35487799","98774586"];

​

console.log(estudante);
```
​

//Alterar
```Js
estudante.curso = "front-end";

estudante.fones = ["0000000","98774586"];
```
​

//Após isso tivemos uma atividade de função com objeto 

​
```Js
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
```
​

//Aqui aprendemos a função de Deletar:

//Deletar
```Js
delete estudante.matricula; //notação de ponto

console.log(estudante);

​

delete estudante["idade"];//notação de array

console.log(estudante);
```
