const preguntas = [
  {
    pregunta: '¿Cual es la clave del exito?',
    a:'ser amable contigo mismo y con los que te rodean',
    b:'el minimo común multiplo',
    c:'levantarse prontito y hacerse la cama',
    d:'tener la llave del exito',
    r: 'c'
  }, {
    pregunta: '¿Cuantos años tienes?',
    a:'No lo se',
    b:'Pajaro',
    c:'20 - 50',
    d:'4',
    r:'a'
  }, {
    pregunta: '¿Cual es la comida mas satisfactoria del mundo?',
    a:'comida? que es eso?',
    b:'sopa',
    c:'macarrones con mucho queso y bien de salsa',
    d:'brocoli',
    r: 'c'
  }, {
    pregunta: '¿Cual es la especie mas prolífica en este nuestro planeta?',
    a:'esta claro, el ser humano',
    b:'los humanos',
    c:'sin duda los humanos',
    d:'indiscutiblemente es el ser humano',
    r:'a'
  }
]


const respuestaEls = document.querySelectorAll(".respuesta");
const quiz = document.getElementById("quiz");
const preguntaElemento = document.getElementById("pregunta_texto");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const botonComprobar = document.getElementById("comprobar");
var puntuacion = 0;

let quizActual = 0;

cargarQuiz();

function cargarQuiz(){
  deseleccionar();
  const preguntasQuizActual = preguntas[quizActual];

  preguntaElemento.innerText = preguntasQuizActual.pregunta;
  a_text.innerText = preguntasQuizActual.a;
  b_text.innerText = preguntasQuizActual.b;
  c_text.innerText = preguntasQuizActual.c;
  d_text.innerText = preguntasQuizActual.d;
}

function getSelected(){

  let respuesta = undefined;

  respuestaEls.forEach((respuestaEl) => {
    if(respuestaEl.checked){
      respuesta = respuestaEl.id;
    }
  })
  return respuesta;
}

function deseleccionar(){

  respuestaEls.forEach((respuestaEl) => {
    respuestaEl.checked = false;
  })
}



botonComprobar.addEventListener('click', () =>{

  const respuesta = getSelected();

  if(respuesta){
    if(respuesta === preguntas[quizActual].r){
      puntuacion++;
    }
    quizActual++;
    if(quizActual < preguntas.length) {
      cargarQuiz();
    } else {
      quiz.innerHTML = `<h2>Has respondido correctamente a ${puntuacion}/${preguntas.length} preguntas.</h2> <button
      onclick="location.reload()">Recargar</button>`;
    }
  }
});
