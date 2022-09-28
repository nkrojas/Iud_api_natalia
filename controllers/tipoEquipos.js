const TipoEquipo = require('../models/tipoEquipos')
const { request, response } = require('express')

//Crea un tipo de equipo
const createTipoEquipo = async (req = request, 
    res = response) => {
        try{
            //console.log(req.body)
            const nombre = (req.body.nombre) 
            ? req.body.nombre.toUpperCase()
            : '';
            const tipoEquipoBD = await TipoEquipo.findOne({ nombre })
            if(tipoEquipoBD){
                return res.status(400).json({msg: 'Ya existe nombre'})
            }
            const datos = {
                nombre
            }
            //const datos = req.body
            const tipoEquipo = new TipoEquipo(datos)
            console.log(tipoEquipo)
            await tipoEquipo.save()
            res.status(201).json(tipoEquipo)
        }catch(e){
          console.log(e)
          return res.status(500).json({
            msg: e
          })
        }
    }
//Consulta todos los tipos de equipo
const getTiposEquipo = async (req = request,
    res = response) => {

    }
//Consulta un tipo de equipo por su ID
const getTipoEquipoByID = async (req = request,
    res = response) => {

    }
//Actualiza un tipo de equipo por su ID
const updateTipoEquipoByID = async (req = request,
    res = response) => {
    }
//Borra un tipo de equipo por su ID

const deleteTipoEquipoByID = async (req = request,
    res = response) => {
    }

module.exports = {
    createTipoEquipo,
    getTiposEquipo,
    getTipoEquipoByID,
    updateTipoEquipoByID,
    deleteTipoEquipoByID
}