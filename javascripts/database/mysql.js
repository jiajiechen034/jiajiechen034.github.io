const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Jchen26@',
    database: 'honkai_characters',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function fetchCharacters() {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM characters');
        console.log('Data Received');
        console.log(rows);
        return rows;
    } catch (err) {
        console.error('Error: ' + err.message);
        throw err;  
    }
}

module.exports = { fetchCharacters };
