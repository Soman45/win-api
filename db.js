const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

console.log("DATABASE_URL:", process.env.DATABASE_URL); 

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = pool;
