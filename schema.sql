CREATE DATABASE references;
USE references;
CREATE TABLE reference (reference_id INT NOT NULL AUTO_INCREMENT,
    author_name varchar(50) NOT NULL,
    author_contact varchar(50) NOT NULL,
    author_organization varchar(50) NOT NULL,
    author_message varchar(1000) NOT NULL,
    author_date DATE NOT_NULL,
    approved BOOL NOT_NULL,
    PRIMARY KEY (reference_id));