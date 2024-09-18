const PromptSync = require("prompt-sync");

const prompt = PromptSync();
//Aividade 1//
/*var nome = "Robson"
var idade = "19"
console.log("Olá meu nome é " + nome + " e tenho " + idade + " anos")*/

//Atividade 2//
/*var nome = prompt("Digite seu nome: ")
var cidade = prompt("Agora digite a sua cidade: ")
console.log(nome + " é de " + cidade )*/

//Atividade 3//
/*const numero1 = 10
const numero2 = 20
const soma = numero1 + numero2
console.log("o resultado da soma é: " + soma)

const numero3 = 100
const numero4 = 48
const subtração = numero3 - numero4
console.log("o resultado da subtração é: " + subtração)

const numero5 = 46
const numero6 = 20
const divisão = numero5 / numero6
console.log("o resultado da divisão é: " + divisão)

const numero7 = 46
const numero8 = 20
const mult = numero7 * numero8
console.log("o resultado da Multiplicação é: " + mult)*/

//Atividade 4//
/*var altura = prompt("digite a altura do triângulo: ")
var base = prompt("digite a Base do triângulo: ")
Area = base * altura/2
console.log("A Área do triângulo é igual a: " + Area)*/
 
//Atividade 5//
/*console.log("vamos tirar a média das notas.")
let nota1 = prompt("Digite a primeira nota: " )
let nota2 = prompt("Digite a segunda nota: " )
let nota3 = prompt("digite a terceira nota: ") 
nota1 = parseInt(nota1)
nota2 = parseInt(nota2)
nota3 = parseInt(nota3)
var media = ((nota1 + nota2 + nota3)/3)
console.log("A sua média é: "+ media)*/

//Atividade 6//
/*let valorinicial = 100
let desconto = 40
valorfinal1 = (valorinicial * desconto) 
valorfinal2 = (valorfinal1 / 100)
console.log("o desconto de 40% de um produto que custava "+ valorinicial + "R$ é de: "+ valorfinal2 + "R$")*/

///Imposto de Renda///
/*export function problem (lines){
let imposto = 0
var salario = Number(lines[0])
var salario = prompt("digite o seu salário: ")
if (salario > 4.664)
 {
imposto = (salario - 4.664) * 0.27
salario = 4.664
console.log(imposto)
}
else if (salario > 3.751)
{
imposto = imposto + (salario - 3.751) * 0.22
salario = 3.751
console.log(imposto)
}
else if (salario > 2.826)
{
imposto = imposto + (salario - 2.826) * 0.15
salario = 2.826
console.log(imposto)
}
else if (salario > 2.259)
{
imposto = imposto + (salario - 2.259) * 0.07
console.log(imposto)
}
else (salario <= 2.259)
console.log("isento")
}*/

//Conversor de Moedas//
/*moedaI = prompt("insira o valor em Real brasileiro desejado para conversão em Dólar americano: " )
taxadecambio = 0.18
moedaF = (moedaI * taxadecambio)
console.log("O valor inserido em Real é de "+ moedaF +" Dólares Americanos")*/

//Convertendo Celsius para Farenheit//
/*temperaturaC = prompt("insira o valor em Celsius desejado para conversão em Farenheit: " )
temperaturaF = (temperaturaC * 9/5) + 32
console.log("A temperatura inserida em Celsius convertida para Farenheit é de: " + temperaturaF)*/

//calculadore de imc//
/*
altura = prompt("digite a sua altura em cm:")
peso = prompt("digite o seu peso em kg:")
imc = peso / (altura * altura) 
console.log("seu imc é: " + imc)
{
if imc < 17{
  console.log("voce está muito abaixo do peso")}
else if (imc >= 17){
  console.log("voce está abaixo do peso")}
else if (imc >= 18.5) {
  console.log("você está com o peso normal")}
else if (imc >= 25) {
  console.log("Você está acima do peso ideal")}
else if (imc >= 30){
  console.log("você está com obsidade grau 1")}
else if ( imc >= 35){
  print ("você está com obsidade grau 2")}
else{
  console.log ("voce esta acima do acima amigão")}*/