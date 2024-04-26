const nombre = document.getElementById('name');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const botonEnviar = document.getElementById('botonEnviar');
const formulario = document.getElementById('formulario');

function enviarFormulario(e) {
  e.preventDefault();

  if (formulario.checkValidity()) {
    console.log('Enviando formulario');
  }

  return false;
}

function validarInput(e) {
 const element = e.target;

 if(!element.validity.valid) {
  const container = element.parentElement;
  container.classList.add('form__controls-container--error');
  } else {
    const container = element.parentElement;
    container.classList.remove('form__controls-container--error')
  }

  if (formulario.checkValidity()) {
    botonEnviar.removeAttribute('disabled');
  } else {
    botonEnviar.setAttribute('disabled', true);
  }

}

nombre.addEventListener('focusout', validarInput);
email.addEventListener('focusout', validarInput);
asunto.addEventListener('focusout', validarInput);
mensaje.addEventListener('focusout', validarInput);

formulario.addEventListener('submit', enviarFormulario);
