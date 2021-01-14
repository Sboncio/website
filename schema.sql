CREATE DATABASE reference;
USE reference;
CREATE TABLE my_reference (reference_id INT AUTO_INCREMENT,
    author_name varchar(50) NOT NULL,
    author_contact varchar(50) NOT NULL,
    author_organization varchar(50) NOT NULL,
    author_message varchar(1000) NOT NULL,
    author_date DATE NOT NULL,
    approved BOOLEAN,
    PRIMARY KEY(reference_id));

INSERT INTO my_reference (author_name, author_contact, author_organization,
    author_message, author_date, approved) values(
        'Sam Asquith',
        'my email',
        'AsquithCorp',
        'He is the greatest guy ever',
        '2021-01-12',
        '1'
    );

INSERT INTO my_reference (author_name, author_contact, author_organization,
    author_message, author_date, approved) values(
        'martin',
        'his email',
        'MartinAsq',
        'Amazing bloke',
        '2021-01-14',
        '0'
    );