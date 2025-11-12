const { MAX } = require('mssql');
const { sql, conectar } = require('../db/Connection.js')

async function getCamposEscolares() {
    const pool = await conectar();
    const result = await pool.request().query("SELECT * FROM escuelasregistradas");
    return result.recordset;
}

async function getCampoEscolarById(id) {
    const pool = await conectar(); 
    const result = await pool.request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM escuelasregistradas WHERE id = @id");
    return result.recordset;
}

async function searchDatos(nombre) {
    const pool = await conectar();
    const result = await pool.request()
        .input("nombre", sql.VarChar, `%${nombre}%`)
        .query("SELECT * FROM escuelasregistradas WHERE Nombre LIKE @nombre");
    return result.recordset;
}

async function addInfoEscuela(datos) {
    const pool = await conectar(); 
    const result = await pool.request()
        .input("nombre", sql.VarChar, datos.nombre)
        .input("tipoDeInstitución", sql.VarChar, datos.tipoDeInstitución)
        .input("nivel", sql.VarChar, datos.nivel)
        .input("modalidad", sql.VarChar, datos.modalidad)
        .input("director", sql.VarChar, datos.director)
        .input("fechaDeFundacion", sql.Date, datos.fechaDeFundacion)
        .input("turno", sql.VarChar, datos.turno)
        .input("aniosACursar", sql.VarChar, datos.aniosACursar)
        .input("capacidadDeAlumnos", sql.Int, parseInt(datos.capacidadDeAlumnos))
        .input("provincia", sql.VarChar, datos.provincia)
        .input("localidad", sql.VarChar, datos.localidad)
        .input("direccion", sql.VarChar, datos.direccion)
        .input("cantDeCompPorEntregar", sql.Int, parseInt(datos.cantDeCompPorEntregar))
        .input("computadorasEntregadas", sql.Int, parseInt(datos.computadorasEntregadas))
        .input("anioAlCualFueEntrgado", sql.VarChar, datos.anioAlCualFueEntrgado)
        .input("computadorasRestantes", sql.Int, parseInt(datos.computadorasRestantes))
        .input("inconvenientes", sql.VarChar(MAX), datos.inconvenientes)
        .query(`
            INSERT INTO escuelasregistradas (
                Nombre, 
                tipoDeInstitución, 
                nivel, 
                modalidad, 
                director, 
                fechaDeFundacion, 
                turno, 
                aniosACursar, 
                capacidadDeAlumnos, 
                provincia, 
                localidad, 
                direccion, 
                cantDeCompPorEntregar, 
                computadorasEntregadas, 
                anioAlCualFueEntrgado, 
                computadorasRestantes, 
                inconvenientes
            ) 
            VALUES (
                @nombre, 
                @tipoDeInstitución, 
                @nivel, 
                @modalidad, 
                @director, 
                @fechaDeFundacion, 
                @turno, 
                @aniosACursar, 
                @capacidadDeAlumnos, 
                @provincia, 
                @localidad, 
                @direccion, 
                @cantDeCompPorEntregar, 
                @computadorasEntregadas, 
                @anioAlCualFueEntrgado, 
                @computadorasRestantes, 
                @inconvenientes
            )
        `);
    return result.rowsAffected;
}

// ✅ VERSIÓN SIMPLIFICADA para UPDATE
async function updateInfoEscuela(id, datos) {
    const pool = await conectar();
    const result = await pool.request()
        .input("id", sql.Int, id)
        .input("nombre", sql.VarChar, datos.nombre)
        .input("tipoDeInstitución", sql.VarChar, datos.tipoDeInstitución)
        .input("nivel", sql.VarChar, datos.nivel)
        .input("modalidad", sql.VarChar, datos.modalidad)
        .input("director", sql.VarChar, datos.director)
        .input("fechaDeFundacion", sql.Date, datos.fechaDeFundacion)
        .input("turno", sql.VarChar, datos.turno)
        .input("aniosACursar", sql.VarChar, datos.aniosACursar)
        .input("capacidadDeAlumnos", sql.Int, parseInt(datos.capacidadDeAlumnos))
        .input("provincia", sql.VarChar, datos.provincia)
        .input("localidad", sql.VarChar, datos.localidad)
        .input("direccion", sql.VarChar, datos.direccion)
        .input("cantDeCompPorEntregar", sql.Int, parseInt(datos.cantDeCompPorEntregar))
        .input("computadorasEntregadas", sql.Int, parseInt(datos.computadorasEntregadas))
        .input("anioAlCualFueEntrgado", sql.VarChar, datos.anioAlCualFueEntrgado)
        .input("computadorasRestantes", sql.Int, parseInt(datos.computadorasRestantes))
        .input("inconvenientes", sql.VarChar(MAX), datos.inconvenientes)
        .query(`
            UPDATE escuelasregistradas 
            SET Nombre = @nombre, 
                tipoDeInstitución = @tipoDeInstitución, 
                nivel = @nivel, 
                modalidad = @modalidad, 
                director = @director, 
                fechaDeFundacion = @fechaDeFundacion, 
                turno = @turno, 
                aniosACursar = @aniosACursar, 
                capacidadDeAlumnos = @capacidadDeAlumnos, 
                provincia = @provincia, 
                localidad = @localidad, 
                direccion = @direccion, 
                cantDeCompPorEntregar = @cantDeCompPorEntregar, 
                computadorasEntregadas = @computadorasEntregadas, 
                anioAlCualFueEntrgado = @anioAlCualFueEntrgado, 
                computadorasRestantes = @computadorasRestantes, 
                inconvenientes = @inconvenientes 
            WHERE id = @id
        `);
    return { mensaje: "Información de la escuela actualizada" };
}

async function deleteRegistro(id) {
    const pool = await conectar();
    const result = await pool.request()
        .input("id", sql.Int, id)
        .query("DELETE FROM escuelasregistradas WHERE id = @id");
    return result.rowsAffected;
}

async function getUsuario() {
    const pool = await conectar();
    const result = await pool.request().query("SELECT * FROM usuariosRegistrados");
    return result.recordset;
}

async function addUsuario(user) {
    const pool = await conectar();
    const result = await pool.request()
    .input("nombre", sql.VarChar, user.nombre)
    .input("email", sql.VarChar, user.email)
    .input("contrasenia", sql.VarChar, user.contrasenia) 
    .input("rango", sql.Bit, user.rango || false)
    .query(`
        INSERT INTO usuariosRegistrados (nombre, email, contrasenia, rango) 
        VALUES (@nombre, @email, @contrasenia, @rango)
    `);
}

module.exports = {
    getCamposEscolares, 
    getCampoEscolarById, 
    searchDatos, 
    addInfoEscuela, 
    updateInfoEscuela,
    deleteRegistro,
    getUsuario,
    addUsuario
}