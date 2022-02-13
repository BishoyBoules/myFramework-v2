const link = document.querySelector('[data-type]');
let element = document.createAttribute('href');
if (!localStorage.themeColor) {
    localStorage.themeColor = `css/themes/default-color.css`;
}
function colorChange(id) {
    localStorage.themeColor = `css/themes/${id}.css`;
    element.value = localStorage.themeColor;
}
element.value = localStorage.themeColor;
link.setAttributeNode(element);