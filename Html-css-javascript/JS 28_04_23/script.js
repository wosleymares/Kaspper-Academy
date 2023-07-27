//Forma tradicional

const livro = {
    id: 1019,
    titulo: "Os guris da rua 3",
    statusVenda: true,
};

/*const id = livro.id;
const titulo = livro.titulo;
const statusVenda = livro.statusVenda;
*/
// Desestruturando propriedades
const {id, titulo} = livro;

console.log(`Informações do livro - id: ${id} titulo: ${titulo} `);
console.log(livro);

// Customizando o nome dos atributos
const { id:idLivro } = livro;
console.log(idLivro);