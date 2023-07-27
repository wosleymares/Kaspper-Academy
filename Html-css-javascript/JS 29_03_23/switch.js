//Com booleano
let logado = true

switch (logado){
    case true:
        console.log("Usuário logado")
        break
    case false:
        console.log("Usuário falso")
        break
}

//Com string
let mes = 'Abril'
switch(mes){
    case "Fevereiro":
    case "Marco":
    case "Abril":
        console.log("1° trimetre")
        break
    case "Junho":
    case "Julho":
    case "Agosto":
        console.log("2° trimestre")
        break
        default:
            console.log("Fora do período letivo")
}

//For (laço)
for (let i = 0; i < 11; i++){
    console.log(i)
}