import express from 'express'
import mongoose from 'mongoose'

const Receta = mongoose.model(
    'Receta',
    new mongoose.Schema({
        nombre: String,
        ingredientes: [String],
        instrucciones: String,
        precio: Number
    })
)

const app = express()

app.use(express.json())

mongoose.connect('mongodb://manu:password@monguito:27017/recetario?authSource=admin')

app.get('/', async (_req, res) => {
    const recetas = await Receta.find()
    return res.send(recetas)
})

app.get('/crear', async (_req, res) => {
    await Receta.create({
        nombre: 'Pizza Margarita',
        ingredientes: ['Masa', 'Queso', 'Tomate'],
        instrucciones: 'Hornear y disfrutar',
        precio: 255
    })
    return res.send('OK')
})

app.get('/limpiar', async (_req, res) => {
  await Receta.deleteMany({})
  res.send("Limpio OK")
})

app.listen(3000, () => console.log('Servidor en http://localhost:3000'))
