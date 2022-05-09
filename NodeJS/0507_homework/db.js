const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host : '127.0.0.1',
  user : 'root',
  password : 'dlgPdls3^^',
  database : 'homepage'
})

// console.log(pool)

async function select(){
  try{
    const sql = "SELECT * FROM board"
    const [result] = await pool.query(sql)
    // console.log(result)
  } catch (e) {
    console.log('에러발생!!!!')
  }
}

select();

module.exports = pool;