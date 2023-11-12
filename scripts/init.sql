create database casamento;

\c casamento;

create table convidado (
    id serial primary key not null,
    nome varchar(50) not null,
    telefone varchar(50),
    email varchar(50),
    principal integer foreign key,
    confirmacao_1 timestamp,
    confirmacao_2 timestamp,
    confirmacao_3 timestamp,
)