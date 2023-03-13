// const inpputNacimiento = document.querySelector('#birth');

// inpputNacimiento.addEventListener('blur', (evento) => {
//     validarNacimiento(evento.target);
// });

export function validar(inpputtt) {
    const tipoDeInput = inpputtt.dataset.tipo; //el dataset me trae todos los datos de data y en el pinto trar el nombre que le puse por lo tanto trae a date-tipo del html 
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](inpputtt);
    }
    //console.log(inpputtt.parentElement);//el parent element selecciona padre del que llamo para poder quitary agrgar las clases

    if (inpputtt.validity.valid) {
        inpputtt.parentElement.classList.remove("input-container--invalid");
        inpputtt.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        inpputtt.parentElement.classList.add("input-container--invalid");
        inpputtt.parentElement.querySelector(".input-message-error").innerHTML =
            mostrarMensajeDeError(tipoDeInput, inpputtt);
    }

};

const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío"
    },
    correo: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El asunto debe de contener entre 10 y 50 caracteres"
    },
    mensaje: {
        valueMissing: "Ingresa un mensaje",
    }
};


const validadores = {
    validando: (entrada) => validar(entrada),
};

function mostrarMensajeDeError(tipoDeInputsito, entradota) {
    let mensaje = "";
    tipoDeError.forEach((error) => {
        if (entradota.validity[error]) {
            console.log(tipoDeInputsito, error);
            console.log(entradota.validity[error]);
            console.log(mensajesDeError[tipoDeInputsito][error]);
            mensaje = mensajesDeError[tipoDeInputsito][error];
        }
    });
    return mensaje;

    
};

