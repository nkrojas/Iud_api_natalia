const Estado = require('../models/estado')
const { request, response } = require('express')

//Crea un tipo de equipo
const createEstado = async (req = request, 
    res = response) => {
        try{
            //console.log(req.body)
            const nombre = (req.body.nombre) 
            ? req.body.nombre.toUpperCase()
            : '';
            const estadoBD = await Estado.findOne({ nombre })
            if(estadoBD){
                return res.status(400).json({msg: 'Ya existe nombre'})
            }
            const datos = {
                nombre
            }
            const estado = new Estado(datos)
            console.log(estado)
            await estado.save()
            res.status(201).json(estado)
        }catch(e){
          console.log(e)
          return res.status(500).json({
            msg: e
          })
        }
}

//Consulta todos los tipos de equipo
const getEstados = async (req = request,
    res = response) => {
//hola
    }
//Consulta un tipo de equipo por su ID
const getEstadoByID = async (req = request,
    res = response) => {

    }
//Actualiza un tipo de equipo por su ID
const updateEstadoByID = async (req = request,
    res = response) => {
    }
//Borra un tipo de equipo por su ID

const deleteEstadoByID = async (req = request,
    res = response) => {
    }

module.exports = {
    createEstado,
    getEstados,
    getEstadoByID,
    updateEstadoByID,
    deleteEstadoByID
}