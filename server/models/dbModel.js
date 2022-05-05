import pkg from 'pg'
const { Pool } = pkg;

const PG_URI = `postgres://cgwxjntn:nAcT6cwfQBn7ScyrfDK0qhnccPuNt1Y4@ziggy.db.elephantsql.com/cgwxjntn`

const pool = new Pool({ connectionString: PG_URI});

const poolENV = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
      }}

export default poolENV;