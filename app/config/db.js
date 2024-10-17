import mysql from "mysql2";

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER ,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
});

db.connect(err => {
    if (err) {
        console.error("Error connecting to MySQL database:", err);
    } else {
        console.log("Connected to MySQL database successfully");
    }
});

export default db;
