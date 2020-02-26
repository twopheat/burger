### Schema

CREATE DATABASE pckrwa43q88yyqo9;
USE pckrwa43q88yyqo9;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
