const { Router } = require('express')
const { 
    createEstado,
    getEstados,
    getEstadoByID,
    updateEstadoByID,
    deleteEstadoByID
} = require('../controllers/estado')

const router = Router()

/**
 * Crea un tipo de equipo
 */
router.post('/', createEstado)

/**
 * Consulta todos los tipos de equipo
 */
router.get('/', getEstados)

/**
 *  Consulta un tipo de equipo por su ID
 */
router.get('/:id', getEstadoByID)

/**
 * Actualiza un tipo de equipo por su ID
 */
router.put('/:id', updateEstadoByID)

/**
 * Borra un tipo de equipo por su ID
 */
router.delete('/:id', deleteEstadoByID)

module.exports = router