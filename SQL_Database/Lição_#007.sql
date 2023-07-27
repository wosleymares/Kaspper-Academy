create database cadastro_usuarios;

create table usuario(
	id int(11) primary key,
    cnh varchar (20) not null,
    nome varchar (60) not null,
    endereco varchar (60) not null,
    telefone varchar (20) not null,
    email varchar (60) not null,
    antecedentes varchar (10) not null,
    senha int (20) not null
);

create table filhos(
	id int(11)primary key,
    rg varchar (20) not null,
    nome varchar (40) not null,
    endereco varchar (80) not null,
    telefone varchar (20) not null,
    escola varchar (60) not null,
    informacoes_adicionais varchar (120) not null,
    foreign key (id) references usuario(id)
);

create table dados_do_veiculo(
	id int(11) primary key,
	placa varchar (10) not null,
    tipo varchar (15) not null,
    ano int (10) not null,
    cor varchar (10) not null,
    foreign key (id) references usuario(id)
);

create table origem_destino (
	id int(11) auto_increment,
	cnh varchar (20),
	nome_motorista varchar (40) not null,
	origem varchar (80) not null,
    destino varchar (80) not null,
    foreign key (id) references usuario(id)
);

insert into usuario values  ('1', 03467589701, 'Joao bastos','rua dos americanos 23',
							11987654323, 'joaobastos@gmail.com', 'nao', '487654321'),
							('2', 03243657890,'Alessandra do nascimento', 'rua neusa coelho 234', 
							11978652413,'alessandra.nascimento@gmail.com', 'nao', '13647589'),
							('3', 03509878612,'Maria Mendes', 'rua alencar j silva 35', 
							11978243565, 'maria.m@yahoo.com.br','não', '12345678');

insert into filhos values   ('1', 440340763, 'Henrique bastos', 'rua mirante do alto', 
							11982763375, 'Jose martins da silva', ' Gosta de esportes, games e comida'),
							('2', 423440445, 'Mirela nascimento', 'rua mirante do alto', 
							11940443546, 'Jose martins da silva', ' Gosta de filmes mangá e adora conversar'),
							('3', 440347672, 'Jhonatas mendes', 'Jose filho de souza', 
							11943676354, 'ETEC Mario mendonca', ' Gosta de desenho e games'); 


insert into dados_do_veiculo values ('1', 'DBF4053', 'utilitario', '2018', 'azul'),
									('2', 'JTF4251', 'passeio', '2021', 'branca'),
									('3', 'AJR3676', 'passeio', '2015', 'vermelho');
                                    
                                    
insert into origem_destino values(default, 03467589701, 'João bastos', 'rua dos americanos 23', 'rua guatambus 69');

