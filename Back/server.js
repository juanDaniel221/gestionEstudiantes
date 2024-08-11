const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const { obtenerEstudiantes, obtenerEstudiante, crearEstudiante, actualizarEstudiante, eliminarEstudiante } = require('./estudiantes');

// Esto habilita CORS para todas las rutas
app.use(cors());
// Middleware para parsear JSON
app.use(express.json());

// Rutas para el CRUD
app.get('/estudiantes', (req, res) => {
  obtenerEstudiantes(req, res);
});

app.post('/estudiantes', (req, res) => {
  crearEstudiante(req, res);
});

app.put('/estudiantes/:id', (req, res) => {
  actualizarEstudiante(req, res);
});

app.delete('/estudiantes/:id', (req, res) => {
  eliminarEstudiante(req, res);
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});