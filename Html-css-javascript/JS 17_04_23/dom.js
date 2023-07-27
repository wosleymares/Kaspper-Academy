//Para manipular o DOM é preciso selecionar o objeto

//getElemtsByTagName
let testeTags = document.getElementsByTagName('section')
//console.log(testeTags);

//document.write(testeTags[0].textContent)

//getElementById
let testId = document.getElementById('tituloPrincipal')
//console.log(testId)

//Alterando o conteúdo
//testId.innerText = "Alterando o DOM"

//getElementsByClasseName
testClass = document.getElementsByClassName('box')
console.log(testClass)

//Percorrendo os Elementos
for (let i = 0; i < testClass.length; i++){
    testClass[i].innerText = `Percorrendo ${i}`;
}
