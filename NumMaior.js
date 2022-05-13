// Faça um script que leia três números inteiros e mostre o maior deles.

var num1 = Number.parseInt(prompt("Digite o primeiro Número:"))
var num2 = Number.parseInt(prompt("Digite o segundo Número:"))
var num3 = Number.parseInt(prompt("Digite o terceiro Número:"))
  if ((num1 > num2) && (num1 > num3)) {
    document.write("Número " +num1+" é maior")
  }else if ((num2 > num1) && (num2 > num3)) {
    document.write("Número " +num2+" é maior")
  }else if ((num3 > num2)  && (num3 > num1)) {
    document.write("Número " +num3+" é maior")
  } else {
    document.write("Tente Novamente")
  }