import { validar } from "./validaciones.js";

const todasLasEntradas = document.querySelectorAll("input");

todasLasEntradas.forEach((entradita) => {
    entradita.addEventListener('blur',(entradita) => {
        validar(entradita.target);
    });
});

const cajasTextos = document.querySelectorAll("textarea");

cajasTextos.forEach((entradita) => {
    entradita.addEventListener('blur',(entradita) => {
        validar(entradita.target);
    });
});

