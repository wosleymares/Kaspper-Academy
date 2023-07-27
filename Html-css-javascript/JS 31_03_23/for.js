//Utilizando o FOR
for (let i = 0; i < 10; i++) {
    // console.log(i)
}


//2° exemplo
let numeros = [10, 222, 12, 323, 435]
for (let i = 0; i < numeros.length; i++) {
    // console.log(numeros[i])
}

//For of
let animes = ["One Peace", "Naruto", "Yu Yu Hakusho"]
for (const anime of animes) {
    // console.log(anime)
}

//For in

let personagem = {
    nome: "Ryu",
    especial: "Hadouken de fogo",
    skin: "roxo",
    dano: "45",
}
for (const propriedade in personagem) {
    console.log(`${propriedade} : ${personagem[propriedade]}`)
}
