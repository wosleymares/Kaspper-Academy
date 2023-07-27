#create database biblioteca;

/*create table livros (
	ISBN int,
    titulo varchar(40),
    ano int,
    editora varchar(40),
    autores_livro varchar(60)
);*/

/*create table autores (
	nome_autor varchar(40),
    nacionalidade varchar (40),
	livros_escritos varchar (60)
);*/

/*create table categorias (
	codigo_categoria int,
    descricao varchar (80),
	Romance varchar (40),
    Drama varchar (40),
    Terror varchar (40),
    Ficcao varchar (40),
    Poesia varchar (40)
);*/

/*insert into livros (ISBN, titulo, ano, editora, autores_livro)
values ('655552726', 'As cronicas de narnia', '2016', 'Tio chico', 'Exterminador do futuro');
*/

select * from livros;

# "Descrição da tabela"
#desc livros;

# "Adicionando colunas"
#alter table livros add column categorias varchar (20);

# "Excluindo colunas"
#alter table livros drop column categorias;

# "Adicionando coluna em ordem"
#alter table livros add column categorias varchar (20) after ISBN;

# " Modificando informações nas linhas da tabela"
/*update livros 
set categorias = 'Ficcao'
where ISBN = '655552726' limit 1;
*/

# "Apagando linhas que não preciso"
/*delete from livros
where ano = '2016'
limit 1;
*/

select * from autores;

# "inserindo dados na tabela autores"

/*insert into autores (nome_autor, nacionalidade, livros_escritos)
values ('Exterminador do futuro', 'Americana', 'As cronicas de narnia');

insert into autores (nome_autor, nacionalidade, livros_escritos)
values ('John green', 'ingles', 'A culpa e das estrelas');

insert into autores (nome_autor, nacionalidade, livros_escritos)
values ('William Kamkwamba', 'African', 'O menino que descobriu o vento');
*/

select * from categorias;

insert into categorias (codigo_categoria, descricao)
values ('01', 'Romance');

insert into categorias (codigo_categoria, descricao)
values ('02', 'Drama');

insert into categorias (codigo_categoria, descricao)
values ('03','Ficcao' );

insert into categorias (codigo_categoria, descricao)
values ('04','Poesia' );

insert into categorias (codigo_categoria, descricao)
values ('05','Terror' );

# "Atenção" o comando 'truncate' apaga toda uma tabela
# Exemplo: truncate livros...Pronto apagou tudo!








