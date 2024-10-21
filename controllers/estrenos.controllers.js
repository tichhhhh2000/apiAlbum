const { request, response } = require("express");
const { estreno } = require("../estrenos");

// Controlador para obtener todos los estrenos
const getEstrenos = (req, res) => {
  return res.json({
    ok: true,
    statusCode: 200,
    estrenos: estreno
  });
};

// Controlador para obtener un estreno por ID
const getEstrenoById = (req = request, res = response) => {
  const id = parseInt(req.params.id);
  const estrenoEncontrado = estreno.find(e => e.id === id);

  if (estrenoEncontrado) {
    return res.json({
      ok: true,
      statusCode: 200,
      data: estrenoEncontrado
    });
  } else {
    return res.status(404).json({
      ok: false,
      statusCode: 404,
      msg: "No hay estrenos con ese ID"
    });
  }
};

module.exports = {
  getEstrenos,
  getEstrenoById
};
