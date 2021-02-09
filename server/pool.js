const { Pool } = require("pg");
const DB_URI = process.env.DB_URL
const pool = new Pool({
    
    connectionString: DB_URI
  })

  module.exports = {
    query: (text, params, callback) => {
      console.log("executed query", text);
      return pool.query(text, params, callback);
    }
  }