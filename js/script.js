const head = document.head;
const link = document.querySelector('[data-type]');
function colorChange(id) {
    link.href = `css/themes/${id}.css`
}