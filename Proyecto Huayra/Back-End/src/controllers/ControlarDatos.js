const serviceEscolar = require('../ServiciosDeDatos/ServiceData')

async function getAll(req, res) {
    try {
        const data = await serviceEscolar.getCamposEscolares()
        res.json(data)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function search(req, res) {
    try{
        const { nombre } = req.query;
        const data = await serviceEscolar.searchDatos(nombre)
        res.json(data);
    } catch (err){
        res.status(500).json({ error: err.message });
    }
}


async function getById(req, res) {
    try {
        const { id } = req.params;
        const data = await serviceEscolar.getCampoEscolarById(id)
        res.json(data)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function createInfoEscuela(req, res) {
    try {
        const datos = req.body;
        const newInfoEscuela = await serviceEscolar.addInfoEscuela(datos);
        res.status(201).json({ mensaje: "Informe de la escuela creado", data: newInfoEscuela });
    } catch (err) {
         res.status(500).json({ error: err.message });
    }
}

async function updateInfEsc(req, res) {
    try{
        const { id } = req.params;
        const datos = req.body; 

        if (!datos.nombre || !datos.tipoDeInstitución || !datos.nivel){
            return res.status(400).json({error: "Faltan datos obligatorios: nombre, tipoDeInstitución, nivel, etc."});
        }

        if (isNaN(datos.capacidadDeAlumnos) || datos.capacidadDeAlumnos <= 0 || 
        isNaN(datos.cantDeCompPorEntregar) || datos.cantDeCompPorEntregar <= 0 || 
        isNaN(datos.computadorasEntregadas) || datos.computadorasEntregadas <= 0 || 
        isNaN(datos.computadorasRestantes) || datos.computadorasRestantes <0){ 
            return res.status(400).json({error: "El cantidad de alumnos matriculado debe ser un número válido mayor a cero"});
        }

        await serviceEscolar.updateInfoEscuela(id, datos)   
        res.json({mensaje: "Informe de la escuela actualizado"});
    } catch (err){
        console.error("Error al actualizar el informe: ", err);
        res.status(500).json({error: err.message})
    }

}

async function deleteRegistro(req, res) {
    try {
        const { id } = req.params;
        await serviceEscolar.deleteRegistro(id);
        res.json({ 
            mensaje: "Registro de la escuela eliminada exitosamente",
            id: id 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Asegúrate de que 'serviceEscolar' esté importado correctamente

async function getUsuario(req, res) {
    try {
        const data = await serviceEscolar.getUsuario();
        res.json(data);
    } catch (err) {
        console.error("Error al obtener usuarios:", err); 
        res.status(500).json({ error: "Error interno del servidor al obtener usuarios" });
    }
}

async function createusuario(req, res) {
    try {
        const newUser = req.body;
        await serviceEscolar.addUsuario(newUser); 
        res.status(201).json({ mensaje: "Usuario creado exitosamente" });
        
    } catch (err) {
        console.error("Error al crear usuario:", err); 
        res.status(500).json({ 
            error: "Error interno del servidor al crear usuario", 
            detalle: err.message 
        });
    }
}


module.exports = {getAll, createInfoEscuela, updateInfEsc, getById, search, deleteRegistro, createusuario, getUsuario}