const button = document.getElementById('btnTarea');
const modal = document.getElementById('ventanaModal');

button.addEventListener('click', () => modal.classList.add('show'));
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('show')
    }
})