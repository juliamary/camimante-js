
var pantallaElement = document.getElementById("pantalla");


// concatenando textos

// 1. usando variables

var texto1 = '<div class="item">Hola 1</div>';
var texto2 = '<div class="item">Hola 2</div>';

var resultado = texto1 + texto2;

pantallaElement.innerHTML = resultado;


// 2. trabajando la concatenación directamente en "innerHTML"

pantallaElement.innerHTML = pantallaElement.innerHTML + '<div class="item">Hola 3</div>';
//pantallaElement.innerHTML = '<div class="item">Hola 1</div><div class="item">Hola 1</div>' + '<div class="item">Hola 3</div>';

// Con += logramos lo mismo que la línea de código anterior.
pantallaElement.innerHTML += '<div class="item">Hola 4</div>';
