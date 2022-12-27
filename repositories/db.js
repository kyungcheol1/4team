const mysql = require("mysql2");
const pass = process.env.DB_PASS;

const pool = mysql
    .createPool({
        host: "localhost",
        port: "3306",
        user: "root",
        password: pass,
        database: "TEAM4",
        connectionLimit: 5,
    })
    .promise();

module.exports = pool;

