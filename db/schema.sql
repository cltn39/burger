DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

CREATE TABLE beverages (
 id INTEGER NOT NULL AUTO_INCREMENT,
    beverage_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    burger_id INT NOT NULL,
    PRIMARY KEY (id)
);

