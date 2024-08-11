const db = require('./db');

const obtenerEstudiantes = async (req, res) => {
  try {
    const [estudiantes] = await db.execute('SELECT * FROM estudiantes');
    res.json(estudiantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener estudiantes' });
  }
};

const obtenerEstudiante = async (req, res) => {
  try {
    const id = req.params.id;
    const [estudiante] = await db.execute('SELECT * FROM estudiantes WHERE id = ?', [id]);
    if (!estudiante) {
      res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    } else {
      res.json(estudiante);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener estudiante' });
  }
};

const crearEstudiante = async (req, res) => {
    try {
      const { nombre, apellido, edad, email } = req.body;
      const [resultado] = await db.execute('INSERT INTO estudiantes SET nombre = ?, apellido = ?, edad = ?, email = ?', [nombre, apellido, edad, email]);
      res.json({ id: resultado.insertId, nombre, apellido, edad, email });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear estudiante' });
    }
  };

  const actualizarEstudiante = async (req, res) => {
    try {
      const id = req.params.id;
      const { nombre, apellido, edad, email } = req.body;
      const [resultado] = await db.execute('UPDATE estudiantes SET nombre = ?, apellido = ?, edad = ?, email = ? WHERE id = ?', [nombre, apellido, edad, email, id]);
      if (resultado.affectedRows === 0) {
        res.status(404).json({ mensaje: 'Estudiante no encontrado' });
      } else {
        res.json({ id, nombre, apellido, edad, email });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al actualizar estudiante' });
    }
  };

const eliminarEstudiante = async (req, res) => {
  try {
    const id = req.params.id;
    const [resultado] = await db.execute('DELETE FROM estudiantes WHERE id = ?', [id]);
    if (resultado.affectedRows === 0) {
      res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    } else {
      res.json({ mensaje: 'Estudiante eliminado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar estudiante' });
  }
};

module.exports = { obtenerEstudiantes, obtenerEstudiante, crearEstudiante, actualizarEstudiante, eliminarEstudiante };