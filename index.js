const express = require("express");
const cors = require("cors");
const { estreno } = require("./estrenos");

const app = express();
const puerto = 2006;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    ok: true,
    statusCode: 200,
    data: estreno
  });
});

app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const estrenoEncontrado = estreno.find(e => e.id === id);

  if (estrenoEncontrado) {
    res.json({
      ok: true,
      statusCode: 200,
      data: estrenoEncontrado
    });
  } else {
    res.status(404).json({
      ok: false,
      statusCode: 404,
      msg: "Estreno no encontrado"
    });
  }
});

app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});
