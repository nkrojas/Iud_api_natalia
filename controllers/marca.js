const Marca = require('../models/marca')
const { request, response } = require('express')

//Crea un tipo de equipo
const createMarca = async (req = request, 
    res = response) => {
        try{
            //console.log(req.body)
            const nombre = (req.body.nombre) 
            ? req.body.nombre.toUpperCase()
            : '';
            const marcaBD = await Marca.findOne({ nombre })
            if(marcaBD){
                return res.status(400).json({msg: 'Ya existe nombre'})
            }
            const datos = {
                nombre
            }
            const marca = new Marca(datos)
            console.log(marca)
            await marca.save()
            res.status(201).json(marca)
        }catch(e){
          console.log(e)
          return res.status(500).json({
            msg: e
          })
        }
}

//Consulta todos los tipos de equipo
const getMarcas = async (req = request,
    res = response) => {

    }
//Consulta un tipo de equipo por su ID
const getMarcaByID = async (req = request,
    res = response) => {

    }
//Actualiza un tipo de equipo por su ID
const updateMarcaByID = async (req = request,
    res = response) => {
    }
//Borra un tipo de equipo por su ID

const deleteMarcaByID = async (req = request,
    res = response) => {
    }

module.exports = {
    createMarca,
    getMarcas,
    getMarcaByID,
    updateMarcaByID,
    deleteMarcaByID
}