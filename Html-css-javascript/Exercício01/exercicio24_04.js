//a) Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.

for(let i = 10; i > 0; i-- )
    console.log(i)

//b) Escreva um algoritmo que calcule e imprima a tabuada do 7 (1 a 10).

for (let i = 1; i <= 10; i++ ){
    let result = 7 * i;
    console.log(`7 x ${i} = ${result}`)
}
    
//c) Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.

//Utilizei o prompt para ficar mais interativo.
let n = parseInt(prompt("Digite um número inteiro maior que zero: "))
for (let i = 1; i <= n; i++){
    console.log(i)
}