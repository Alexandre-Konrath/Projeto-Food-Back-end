
create table usuario(
	id_usuario integer primary key AUTOINCREMENT not null,
	nome varchar(50),
	email varchar(100),	
	senha varchar(100)
);

create table produto(
	id_produto integer primary key AUTOINCREMENT not null,
	nome varchar(50),
	descricao varchar(200),
	preco decimal(9,2),
	foto varchar(1000)
);

create table pedido(
	id_pedido integer primary key AUTOINCREMENT not null,
	id_usuario int,
	nome varchar(50),
	email varchar(100),
	fone varchar(50),	
	endereco varchar(100),	
	bairro varchar(100),
	cidade varchar(50),
	uf varchar(2),
	cep varchar(10),	
	total decimal(9,2),
	dt_pedido date
);

create table pedido_item(
	id_item integer primary key AUTOINCREMENT not null,
	id_pedido int,
	id_produto int,	
	qtd decimal(9,2),
	vl_unitario decimal(9,2),
	vl_total decimal(9,2)	
);

insert into usuario(nome, email, senha)
values('Heber Stein Mazutti', 'heber@teste.com.br', '');


insert into produto(nome, descricao, preco, foto)
values('Spicy Burguer', 'Hamburguer de 250g, queijo, tomate, alface e cebola', 
       24.90, 'https://jornadajs-food.s3.amazonaws.com/spicy.png');
	   
insert into produto(nome, descricao, preco, foto)
values('Sanduba', 'Sanduiche natural, alface, tomate, pão integral e orégano', 
       22.00, 'https://jornadajs-food.s3.amazonaws.com/sanduba.png');

insert into produto(nome, descricao, preco, foto)
values('Super Burguer', 'Hamburguer de 300g, molho, queijo, tomate, alface e cebola', 
       29.90, 'https://jornadajs-food.s3.amazonaws.com/super.png');

insert into produto(nome, descricao, preco, foto)
values('Mega', 'Hamburguer de 300g, maionese, tomate, alface, queijo e cebola', 
       34.90, 'https://jornadajs-food.s3.amazonaws.com/mega.png');

insert into produto(nome, descricao, preco, foto)
values('Penne', 'Penne ao molho especial de tomates rústicos, ervas aromáticas e cebola', 
       27.00, 'https://jornadajs-food.s3.amazonaws.com/penne.png');

insert into produto(nome, descricao, preco, foto)
values('Fritas',  'Batata frita crocante com molho especial de maionese da casa', 
       14.90, 'https://jornadajs-food.s3.amazonaws.com/fritas.png');

insert into produto(nome, descricao, preco, foto)
values('Coca-Cola Lata', 'Coca-cola em lata de 300ml, trincando de gelada para você', 
       9.90, 'https://jornadajs-food.s3.amazonaws.com/coca.png');
	   