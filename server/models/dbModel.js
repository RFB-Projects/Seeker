import pkg from 'pg'
const { Pool } = pkg;
import 'dotenv/config'

const pool = new Pool({ connectionString: process.env.DB_password});

const poolENV = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
      }}

export default poolENV;