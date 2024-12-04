const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

// Rutas para profesores
router.get('/profesores', profesoresController.getAllProfesores);
router.get('/profesores/:id', profesoresController.getProfesor);
router.post('/profesores', profesoresController.createProfesor);
router.put('/profesores/:id', profesoresController.updateProfesor);
router.patch('/profesores/:id', profesoresController.patchProfesor); // Verifica que esté exportado
router.delete('/profesores/:id', profesoresController.deleteProfesor);

// Rutas para gestionar cursos de profesores
router.post('/profesores/agregar-curso', profesoresController.agregarCursoAProfesor);
router.post('/profesores/eliminar-curso', profesoresController.eliminarCursoDeProfesor);

console.log(router.stack);
module.exports = router;
