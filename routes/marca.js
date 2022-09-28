const { Router } = require('express')
const { 
    createMarca,
    getMarcas,
    getMarcaByID,
    updateMarcaByID,
    deleteMarcaByID
} = require('../controllers/marca')

const router = Router()

/**
 * Crea un tipo de equipo
 */
router.post('/', createMarca)

/**
 * Consulta todos los tipos de equipo
 */
router.get('/', getMarcas)

/**
 *  Consulta un tipo de equipo por su ID
 */
router.get('/:id', getMarcaByID)

/**
 * Actualiza un tipo de equipo por su ID
 */
router.put('/:id', updateMarcaByID)

/**
 * Borra un tipo de equipo por su ID
 */
router.delete('/:id', deleteMarcaByID)

module.exports = router