const Usuario = require('../models/usuario')
const { request, response } = require('express')

//Crea un usuario

const createUsuario = async (req = request, 
    res = response) => {
    try{
        const data = req.body
        const email = data.email
        console.log(data)
        const usuarioBD = await Usuario.findOne({ email })
        if(usuarioBD){
            return res.status(400).json({msg: 'Ya existe usuario'})
        }
        const usuario = new Usuario(data)
        console.log(usuario)
        await usuario.save()
        return res.status(201).json(usuario)
    }catch(e){
        console.log(e)
        return res.status(500).json({e})
    }
}
//Consulta todos los usuarios
const getUsuarios = async (req = request,
    res = response) => {

    }
//Consulta un usuario por su ID
const getUsuarioByID = async (req = request,
    res = response) => {

    }
//Actualiza un usuario por su ID
const updateUsuarioByID = async (req = request,
    res = response) => {
    }
//Borra un usuario por su ID

const deleteUsuarioByID = async (req = request,
    res = response) => {
    }

 module.exports = { 
    createUsuario, 
    getUsuarios, 
    getUsuarioByID,
    updateUsuarioByID,
    deleteUsuarioByID
}
    