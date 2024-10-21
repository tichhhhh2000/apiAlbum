const { request, response } = require("express");
const { estreno } = require("../estreno");  // Importamos los estrenos

// Controlador para obtener todos los estrenos
const getEstrenos = (req, res) => {
    return res.json({
        ok: true,
        statusCode: 200,
        estrenos: estreno  // Cambiado a 'estrenos'
    });
};

// Controlador para obtener un estreno por ID
const getEstrenoById = (req = request, res = response) => {
    const id = parseInt(req.params.id);  // Obtenemos el ID del request
    const estrenoEncontrado = estreno.find(e => e.id === id);  // Buscamos por ID

    if (estrenoEncontrado) {
        return res.json({
            ok: true,
            statusCode: 200,
            data: estrenoEncontrado  // Devolvemos el estreno encontrado
        });
    } else {
        return res.status(404).json({
            ok: false,
            statusCode: 404,
            msg: "No hay estrenos con ese ID"  // Mensaje de error adaptado
        });
    }
};

module.exports = {
    getEstrenos,
    getEstrenoById
};
