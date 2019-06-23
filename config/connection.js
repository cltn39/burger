const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'mwgmw3rs78pvwk4e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
    port: 3306,
    user: 'yp4xen5a7wlw0ynm',
    password: 'vfi7b261dqhm8ilt',
    database: 'wbr4jyt62518wrwg'
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