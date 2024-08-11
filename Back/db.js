const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'tu_host',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos',
};

const db = mysql.createPool(dbConfig);

module.exports = db;