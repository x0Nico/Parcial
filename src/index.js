const express = require("express");
const usuarios = require("./data/usuarios.json");
const reglas = require("./politica/reglas");

const PORT = process.env.PORT || 5000;
const app = express();

const filtro = (usarios) =>
  usuarios.filter((u) => reglas.some((r) => !r.fn(u.password)));

const reglasNoCumple = (usuario) =>
  reglas.filter((r) => !r.fn(usuario.password)).map((r) => r.regla);

const mapperSimple = (u) => {
  return {
    userName: u.userName,
    email: u.email,
  };
};

const mapperConReglas = (u) => {
  return {
    ...mapperSimple(u),
    reglasInclumplidas: reglasNoCumple(u),
  };
};

app.get("/validador", (req, res) => {
  const respuesta = filtro().map((u) => mapperSimple(u));
  res.status(200).json(respuesta);
});

app.get("/validador/con-reglas", (req, res) => {
  const respuesta = filtro().map((u) => mapperConReglas(u));
  res.status(200).json(respuesta);
});

app.get("/usuarios-correctos", (req, res) => {
  const respuesta = usuarios
    .filter((u) => !filtro().includes(u))
    .map((u) => mapperSimple(u));

  res.status(200).json(respuesta);
});

app.listen(PORT, () => {
  console.log("aplicacion iniciada...");
});