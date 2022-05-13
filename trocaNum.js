// Crie duas variáveis e peça para que o usuário digite dois números inteiros pelo prompt. Após receber os valores nas variáveis, inverta os valores dentro das variáveis, ou seja, o valor da variável x vai para a variável y e o valor da variável y vai para a variável x. Mostre o antes das variáveis e seu depois.

let num1 = Number.parseInt(prompt("Digite a variavel X:"))
let num2 = Number.parseInt(prompt("Digite a variavel Y:"))
let num3 = [num1, num2]


  document.write(num1+" é X /")
  
  document.write(num2+" é Y *******")

  num3.reverse()
  
  document.write("Seu inverso é ("+num3+")")
 
  // console.log(num3)