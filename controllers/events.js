const { response, request, json } = require("express");
const Evento = require("../models/Event");
const createEvent = async (req = request, res = response) => {
  //verificar
  const evento = new Evento(req.body);

  try {
    //asignamos el usuario que esta grabando el dato
    evento.user = req.uid;
    const eventoGuardado = await evento.save();

    //estamos convirtiendo a json
    res.status(200).json({
      ok: true,
      msg: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: true,
      msg: "Hable con el admin",
    });
  }
};
const updateEvent = async (req = request, res = response) => {
  const eventoId = req.params.id;
  const uid = req.uid;
  try {
    const evento = await Evento.findById(eventoId);

    if (!evento) {
      res.status(404).json({
        ok: false,
        msg: "No se encontro a evento",
      });
      return;
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio par actualizar evento",
      });
    }

    const nuevoEvento = {
      ...req.body,
      user: uid,
    };

    const eventoActualizado = await Evento.findByIdAndUpdate(
      eventoId,
      nuevoEvento,
      {
        //Para que devuelva el dato actualizado y no el que envio
        new: true,
      }
    );
    res.json({ ok: true, evento: eventoActualizado });
  }catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el admin",
    });
  }
};
const showEvent = async (req = request, res = response) => {

  res.status(200).json('hola');

  const eventos = await Evento.find().populate("user", "name");
  res.status(200).json({
    ok: true,
    eventos,
  });
};
const deleteEvent = async (req = request, res = response) => {
  const eventoId = req.params.id;
  const uid = req.uid;
  try {
    const evento = await Evento.findById(eventoId);

    if (!evento) {
      res.status(404).json({
        ok: false,
        msg: "No se encontro a evento",
      });
      return;
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio par Eliminar este evento",
      });
    }

    await Evento.findByIdAndDelete(eventoId);
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el admin",
    });
  }
};

module.exports = {
  createEvent,
  updateEvent,
  showEvent,
  deleteEvent,
};
