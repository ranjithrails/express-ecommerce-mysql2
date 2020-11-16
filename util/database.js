const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test_db',
    password: 'admin123'
});

module.exports = pool.promise();