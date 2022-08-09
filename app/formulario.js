const formulario = document.querySelector('#formulario');
const template = document.querySelector('#template');
const pendiente = document.querySelector('#pendiente')

formulario.addEventListener('submit', crearFormulario);

function crearFormulario(e) {
    e.preventDefault();

    const tarea = document.querySelector('#tarea').value;
    const responsable = document.querySelector('#responsables').value;
    const descriptcion = document.querySelector('#descripcion').value;

    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector('.title__tmp').textContent = tarea;
    clone.querySelector('.descripcion__tmp').textContent = descriptcion;
    clone.querySelector('.item__tmp').textContent = responsable;

    pendiente.appendChild(clone)


}