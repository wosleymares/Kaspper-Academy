//O atributo length retorna o comprimento total 
//da string em número de caracteres.
const nome = "Mario";
console.log(nome.length);

//O método indexOf retorna o índice da primeira ocorrência de um caractere
//ou substring na string.
const frase = "Estou aprendendo a programar em javascript";
console.log(frase.indexOf("programar"));

//O método slice retorna uma parte da string, começando do índice especificado e 
//terminando em outro índice especificado.
const texto = "Sexta feira é dia de aula";
console.log(texto.slice(6, 11));

//O método toUpperCase converte todos os caracteres da string para maiúsculas.
const palavra = "naruto";
console.log(palavra.toUpperCase());

//O método replace substitui um caractere ou substring por 
//outra string especificada. 
const sub = "Goku é mais forte";
console.log(sub.replace("Goku", "Vegita"));