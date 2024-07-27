const { Pool } = require('pg');

const pool = new Pool({
  user: 'mealuser',
  host: 'localhost',
  database: 'mealplanner',
  password: 'yourpassword',
  port: 5432,
});

module.exports = pool;
