const express = require('express');

const app = express()


const tipoEquipo = require('./routes/tipoEquipos')
const estado = require('./routes/estado')
const marca = require('./routes/marca')
const usuario = require('./routes/usuario')


app.use(express.json())

app.use('/api/tipoequipos', tipoEquipo)
app.use('/api/estado', estado)
app.use('/api/marca', marca)
app.use('/api/usuario', usuario)


module.exports = app;
