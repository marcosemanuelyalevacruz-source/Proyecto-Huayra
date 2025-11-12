const sql = require("mssql");
const dbConfig = require("../Config/db.js");

let pool;

async function conectar () {
    try{
        pool = await sql.connect(dbConfig);
        const resultado = await pool.request().query("SELECT 1 as test");
        console.log("Base de datos conectado exitosamente " , resultado.recordset);
        return pool;
    }
    catch(error){
    console.log("No se pudo conectar a la base de datos F")
    console.error("Error en: ", error.message);
}
}

module.exports = {
  sql,
  conectar,
};