"use strict";

const mysql = require("mysql");

const dbMysql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "examenbd"

});
dbMysql.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected to MySQL");
}
);
module.exports = dbMysql;