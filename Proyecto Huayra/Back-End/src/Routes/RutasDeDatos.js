const express = require('express');
const router = express.Router();
const datosEscolaresController = require('../controllers/ControlarDatos');

router.get('/', datosEscolaresController.getAll);
router.get('/search', datosEscolaresController.search);
router.get('/:id', datosEscolaresController.getById);
router.post('/', datosEscolaresController.createInfoEscuela);
router.put('/:id', datosEscolaresController.updateInfEsc);
router.delete('/:id', datosEscolaresController.deleteRegistro);
router.delete('/', datosEscolaresController.getUsuario);
router.delete('/', datosEscolaresController.createusuario);

module.exports = router;
