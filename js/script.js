const head = document.head;

let link = document.createElement('link');
link.type = "text/css";
link.rel = "stylesheet";
head.appendChild(link);

function colorChange(id) {
    link.href = `css/themes/${id}.css`
}