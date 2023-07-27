//Trabalhando com arrays
let array = ["string" , 10, false];
console.log(array);

let clientes = ["Bill" , "Steve", "Goku"];

//Acessando um índice
console.log(clientes[2]);

/*Manipulando o Array
Adicionando um lemento novo*/
clientes.push("Vegeta");
console.log(clientes);

//Remove o primeiro elemento
clientes.shift();
console.log(clientes);

//Adiciona um novo elemento na lista
clientes.unshift("Bob" ,"Priscila","João");
console.log(clientes);

//Tamanho do array
console.log(clientes.length);
console.log(clientes[1]);

//Utilizando o tipo object
const cliente = {
    nome: "Goku Saiagyn",
    idade: 40,
    endereco:{
        rua:"Jesus de Nazareth",
        numero:"35",
    },
    filhos:["Gohan", "Goten"]

}
console.log(cliente);

//Exibindo uma propriedade específica do objeto
console.log(cliente.nome)
console.log(cliente["endereco"]);
console.log(cliente.endereco.rua);