//Estrutura condicional

const idade = 20

if(idade >= 18){
    console.log("Você precisa votar!") }

const idade = prompt ("Informe sua idade: ")
console.log(idade + 1)

//Operador "e" && Operador "ou" ||
if (idade > 15 && idade < 18 || idade > 70){
    console.log("Seu voto é opcional")
} else if (idade < 16){
    console.log("Você não vota!")
}else {
    console.log("Você tem que votar!")
}