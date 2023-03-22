const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'nunuuser',
  password: '12345678a',
  database: 'db_wedding_invitation',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = {pool};