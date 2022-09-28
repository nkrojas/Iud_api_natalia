const { Router } = require('express')
const { 
    createUsuario, 
    getUsuarios, 
    getUsuarioByID,
    updateUsuarioByID,
    deleteUsuarioByID
} = require('../controllers/usuario')

const router = Router()

/**
 * Crea un tipo de equipo
 */
router.post('/', createUsuario)

/**
 * Consulta todos los tipos de equipo
 */
router.get('/', getUsuarios)

/**
 *  Consulta un tipo de equipo por su ID
 */
router.get('/:id', getUsuarioByID)

/**
 * Actualiza un tipo de equipo por su ID
 */
router.put('/:id', updateUsuarioByID)

/**
 * Borra un tipo de equipo por su ID
 */
router.delete('/:id', deleteUsuarioByID)

module.exports = router