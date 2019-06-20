const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});

// Establish connection
connection.connect((err) => {
    if (err) {
        console.error(`error connection: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

//Export
module.exports = connection;